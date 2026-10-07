

const boton = document.querySelector("#menu_boton");

const menu = document.querySelector(".navbar_list");

boton.addEventListener("click", function() {

    menu.classList.toggle("active");

});

const contactModal = document.querySelector(".contact");

const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");

openContact.addEventListener("click", function() {
    contactModal.classList.add("active");
});

closeContact.addEventListener("click", function() {
    contactModal.classList.remove("active");
});

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Mensaje enviado correctamente");

});