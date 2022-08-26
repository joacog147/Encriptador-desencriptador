const inputTexto = document.querySelector(".inputTexto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptrado = encriptar(inputTexto.value)

    document.getElementById("copiar").style.display = "flex";
    mensaje.value = textoEncriptrado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)

    document.getElementById("copiar").style.display = "flex";
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();  

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["ai", "a"],["enter", "e"],["imes", "i"],["ober","o"],["ufat","u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}