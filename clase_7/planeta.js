window.onload = init;
    function init() {
        var planet = document.getElementById("greenplanet");
        planet.innerHTML = "Red alert: hit by phaser fire";

        var botonTexto = document.getElementById("btnCambiarTexto");
        botonTexto.addEventListener("click", modificarReplanet);
    }
    

    function modificarReplanet(){
        var planet = document.getElementById("redplanet");
        planet.innerHTML = "red alert: hit by phaser fire";
    }