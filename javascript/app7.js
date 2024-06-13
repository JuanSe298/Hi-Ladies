const $esferoKitty = document.getElementById("esfero-kitty");
const $mediasDivertidas = document.getElementById("medias-divertidas");
const $monoCoquette = document.getElementById("mono-coquette");
const $pinzaDorada = document.getElementById("pinza-dorada");
const $pinzaFantasia = document.getElementById("pinza-fantasia");
const $pinzaMariposa = document.getElementById("pinza-mariposa");
const $pinzaGrande = document.getElementById("pinza-grande");




$esferoKitty.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/esferokitty.html";
})


$mediasDivertidas.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/mediasdivertidas.html";
})

$monoCoquette.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/monocoquette.html";
})

$pinzaDorada.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/pinzadorada.html";
})

$pinzaFantasia.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/pinzafantasia.html";
})

$pinzaGrande.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/pinzagrande.html";
})

$pinzaMariposa.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/pinzamariposa.html";
})




