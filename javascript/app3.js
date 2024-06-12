const $init_text = document.querySelectorAll(".init-text");
const $inicio = $init_text[0];
const $catalogo = $init_text[1];



$inicio.addEventListener("click",function(event){
    event.preventDefault();
    document.location.href = "../../index.html#main"
});

$catalogo.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "../catalogue.html";
})