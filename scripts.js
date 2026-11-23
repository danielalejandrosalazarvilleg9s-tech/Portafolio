const boton = document.querySelector("#menu_boton");
const menu = document.querySelector(".navbar_list");
const navLinks = document.querySelectorAll(".navbar_list-item a");

if (boton && menu) {
  boton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    boton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      boton.setAttribute("aria-expanded", "false");
    });
  });
}

const contactModal = document.querySelector(".contact");
const modalBox = document.querySelector(".Contact_ventana_modal");
const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");
const contactForm = document.getElementById("contactForm");

function openModal() {
  if (!contactModal) return;
  contactModal.classList.add("active");
  if (menu && boton) {
    menu.classList.remove("active");
    boton.setAttribute("aria-expanded", "false");
  }
}

function closeModal() {
  if (!contactModal) return;
  contactModal.classList.remove("active");
}

openContact?.addEventListener("click", openModal);
closeContact?.addEventListener("click", closeModal);

contactModal?.addEventListener("click", (event) => {
  if (modalBox && !modalBox.contains(event.target)) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.classList.contains("active")) {
    closeModal();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});