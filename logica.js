
console.log("hola"); 

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje"); 

const matrizCodigo =[
    ["e","enter"], 
    ["i","imes"], 
    ["a","ai"], 
    ["o","ober"], 
    ["u","ufat"] 
    ]


let boton = document.getElementById('btnEncriptar');
boton.addEventListener('click', function(e) {
    e.preventDefault();
    btnEncriptar();
 });


 let btn = document.getElementById('btnDesencriptar');
 btn.addEventListener('click', function(event) {
    event.preventDefault();
     btnDesencriptar();
 });
 

 let button = document.getElementById('btnCopiar');
 button.addEventListener('click', function(evento) {
    evento.preventDefault();
    btnCopiar();
 });




 function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""
    console.log(textoEncriptado);  
} 


function btnDesencriptar(){
   const  textoDesencriptado = desencriptar(textArea.value);
    mensaje.value=textoDesencriptado
    textArea.value=""
    console.log(textoDesencriptado); 
}


function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i=0 ; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptado; 
}


function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i=0 ; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptado; 

}

function btnCopiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado); 
    mensaje.value=""
}