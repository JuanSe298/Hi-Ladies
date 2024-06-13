const $categories = document.querySelectorAll(".categorie");

$categories[0].addEventListener("click", function(event){
    event.preventDefault();
    document.location.href ="html/collaresysets.html"
})

$categories[1].addEventListener("click", function(event){
    event.preventDefault();
    document.location.href ="html/toposyearcuff.html"
})

$categories[2].addEventListener("click", function(event){
    event.preventDefault();
    document.location.href ="html/otros.html"
})