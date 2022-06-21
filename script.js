var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var muneco =document.querySelector(".espacio-muneco");
var h3 =document.querySelector(".espacio-h3");
var parrafo =document.querySelector(".espacio-parrafo");
var resultado =document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".boton-copiar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar () {
     ocultarAdelante()
     resultado.textContent = encriptarTexto(recuperarTexto())
}

function recuperarTexto (){
    var area = document.querySelector(".area");
    return area.value;

}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i =0; i < matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar=StringParaEncriptar.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function desencriptar () {
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto (){
   var area = document.querySelector(".area");
   return area.value;

}

function ocultarAdelante(){
   muneco.classList.add("ocultar");
   h3.classList.add("ocultar");
   parrafo.classList.add("ocultar");
}

function desencriptarTexto(StringParaDesencriptar){
    let matrizCodigo =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaDesencriptar;
}

function copiar() {            
    var copyText = document.getElementById("texto-resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: " + copyText.value); 
}

