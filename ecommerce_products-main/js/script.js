let isOpen = false; // Variável para controlar se um popup está aberto

// Função para abrir o popup
function openPopup(id) {
    const bg = document.querySelector(".bg");
    const productFull = document.getElementById(id);
    
    bg.style.display = "block";
    bg.style.zIndex = "1"; // Define um z-index mais baixo para a div .bg

    productFull.style.display = "block";
    productFull.style.zIndex = "2"; // Define um z-index mais alto para o popup

    isOpen = true;
}

// Função para fechar o popup
function closePopup() {
    const bg = document.querySelector(".bg");
    bg.style.display = "none";
    
    document.querySelectorAll(".full-product").forEach(productFull => {
        productFull.style.display = "none"; // Oculta o popup
    });

    isOpen = false;
}

// Evento de clique nos links dos produtos
document.querySelectorAll(".product-link").forEach(item => {
    item.addEventListener("click", event => {
        if (!isOpen) { // Verifica se nenhum popup está aberto
            const id = item.getAttribute("data-productid");
            openPopup(id);
        }
    });
});

// Evento de clique na div .bg para fechar o popup
document.querySelector(".bg").addEventListener("click", function() {
    if (isOpen) { // Verifica se um popup está aberto
        closePopup();
    }
});

// Evento de clique no botão "X" para fechar o popup
document.querySelectorAll(".close-button").forEach(closeButton => {
    closeButton.addEventListener("click", function() {
        if (isOpen) { // Verifica se um popup está aberto
            closePopup();
        }
    });
});

// Evento de pressionar a tecla Esc para fechar o popup
document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && isOpen){ // Verifica se um popup está aberto
        closePopup();
	}
});
// Evento de clique nos links dos produtos
document.querySelectorAll(".product-link").forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault(); // Impede o comportamento padrão do link âncora
        if (!isOpen) { // Verifica se nenhum popup está aberto
            const id = item.getAttribute("data-productid");
            openPopup(id);
        }
    });
});

