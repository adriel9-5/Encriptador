

const campoTexto = document.querySelector("#campo-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje");

console.log(campoTexto, campoMensaje);

const matriz_code = [
    ["e", "enter"],
    ["i","imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar(){
    const texto = encriptar(campoTexto.value);
   campoMensaje.value = texto;
}


function encriptar(fraseEncriptada){
    for (let i = 0;  i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
        fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],
            matriz_code[i][1])
    }
        
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campoMensaje.value);
    campoMensaje.value = texto;
}

function desencriptar(fraseDesencriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseDesencriptada.includes(matriz_code[i][0])) {
           fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_code[i][1],
            matriz_code[i][0]) 
        }
        
    }
    return fraseDesencriptada;
}