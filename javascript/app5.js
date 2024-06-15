const $inicial = document.getElementById("inicial");
const $inicialBrillo = document.getElementById("inicial-brillo");
const $mariposa = document.getElementById("mariposa");
const $setCorazones = document.getElementById("set-corazones");
const $choquerCadenaPlana = document.getElementById("choquer-cadena-plana")
const $setFiguras = document.getElementById("set-figuras");





$inicial.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/inicial.html";
})

$inicialBrillo.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/inicialbrillo.html";
})


$mariposa.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/mariposa.html";
})

$setCorazones.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/setcorazones.html";
})

$choquerCadenaPlana.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/choquercadenaplana.html";
});

$setFiguras.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/setfiguras.html";
})
