const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

// Adicionando o evento de clique no ícone do menu
menuIcon.addEventListener("click", function() {
    // Verifica se o menu está fechado ou aberto
    if (navMenu.style.right === "0px") {
        navMenu.style.right = "-250px"; // Fecha o menu
    } else {
        navMenu.style.right = "0"; // Abre o menu
    }
});