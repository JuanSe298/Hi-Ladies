const $earCuffColores = document.getElementById("ear-cuff-colores");
const $toposFiguras = document.getElementById("topos-figuras");
const $earCuffFiguras = document.getElementById("ear-cuff-figuras");
const $earCuffElegante = document.getElementById("ear-cuff-elegante");
const $mandala = document.getElementById("mandala");
const $toposDeMiniColor = document.getElementById("topos-de-mini-color");
const $toposDeSeguridadFiguras = document.getElementById("topos-de-seguridad-figuras");
const $topoSeguridadPerla = document.getElementById("topo-seguridad-perla");
const $mediasGym = document.getElementById("medias-gym");


$earCuffColores.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/earcuffcolores.html";
});

$toposFiguras.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/toposfiguras.html";
});

$earCuffElegante.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/earcuffelegante.html";
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

$toposDeMiniColor.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/toposdeminicolor.html";
})

$toposDeSeguridadFiguras.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/toposdeseguridadfiguras.html";
})

$mediasGym.addEventListener("click", function(event){
    event.preventDefault();
    document.location.href = "productos/mediasGYM.html";
})




