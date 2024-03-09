// let colorDiv;
let zIndex = 0;

function abrirVentana(color) {
    document.querySelector(color).style = "display: flex; z-index: " + zIndex;
    zIndex++;
    document.querySelector(color + "-container").style = "display: flex;"
}
function cerrarVentana(color) {
    document.querySelector(color).style.display = "none";
    zIndex--;
    document.querySelector(color + "-container").style = "display: flex;"
}

function minimizar(color) {
    document.querySelector(color + "-container").style = "display: none;"
    document.querySelector(color).style.top = "60vh";
}

function maximizar(color) {
    document.querySelector(color + "-container").style = "display: flex;"
    document.querySelector(color).style = "display: flex; z-index: " + zIndex;
    zIndex++;
}


/*Funciones ClickOpen*/
function clickRosa() {
    let color = "#rosa";
    abrirVentana(color);
}
function clickAzul() {
    let color = "#azul";
    abrirVentana(color);
}
function clickAmarillo() {
    let color = "#amarillo";
    abrirVentana(color);
}
function clickBlanco() {
    let color = "#blanco";
    abrirVentana(color);
}

/*Funciones ClickClose*/
function cerrarRosa() {
    let color = "#rosa";
    cerrarVentana(color);
}
function cerrarAzul() {
    let color = "#azul";
    cerrarVentana(color);
}
function cerrarAmarillo() {
    let color = "#amarillo";
    cerrarVentana(color);
}
function cerrarBlanco() {
    let color = "#blanco";
    cerrarVentana(color);
}

/*Funciones ClickMinimizar*/
function minimizarRosa() {
    let color = "#rosa";
    minimizar(color);
}
function minimizarAzul() {
    let color = "#azul";
    minimizar(color);
}
function minimizarAmarillo() {
    let color = "#amarillo";
    minimizar(color);
}
function minimizarBlanco() {
    let color = "#blanco";
    minimizar(color);
}


/*Funciones ClickMaximizar*/
function maximizarRosa() {
    let color = "#rosa";
    maximizar(color);
}

function maximizarAzul() {
    let color = "#azul";
    maximizar(color);
}
function maximizarAmarillo() {
    let color = "#amarillo";
    maximizar(color);
}
function maximizarBlanco() {
    let color = "#blanco";
    maximizar(color);
}