const boton = document.querySelector("#menu_boton");

const menu = document.querySelector(".navbar_list");

boton.addEventListener("click", function() {

    menu.classList.toggle("active");

});