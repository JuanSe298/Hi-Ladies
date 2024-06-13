const $earCuffColores = document.getElementById("ear-cuff-colores");
const $earCuffFiguras = document.getElementById("ear-cuff-figuras");
const $mandala = document.getElementById("mandala");
const $topoSeguridadPerla = document.getElementById("topo-seguridad-perla");


$earCuffColores.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/earcuffcolores.html";
});

$earCuffFiguras.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/earcufffiguras.html";
})

$mandala.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/mandala.html";
})


$topoSeguridadPerla.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/toposeguridadperla.html";
})




