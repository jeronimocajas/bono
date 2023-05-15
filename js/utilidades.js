function crearElemto(nombreTag) {
    return document.createElement(nombreTag)
}

function crearElementoConTexto(nombreTag, texto) {
    var elemento = crearElemto(nombreTag)
    var textoElemento = document.createTextNode(texto)
    elemento.appendChild(textoElemento)
    return elemento

}

function adicionarHijo(padre, hijo) {
    padre.appendChild(hijo)

}

function adicionarABody(hijo) {
    adicionarHijo(document.body , hijo)

}

function crearImagen(urlImagen) {
    var img = crearElemto("img");
    img.src = urlImagen;
    return img;

}

function crearOption (texto,valor){
    var option = crearElemto("option");
    option.appendChild(crearElementoConTexto("label",texto));
    option.valor = valor;

    return option
}