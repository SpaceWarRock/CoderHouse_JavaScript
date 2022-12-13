// Carrito
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carrito");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () =>{
    cart.classList.add("active");
};

closeCart.onclick = () =>{
    cart.classList.remove("active");
};

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Cambios de Cantidad
    var quantityInputs = document.getElementsByClassName("cantidad");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // Agregar al Carrito
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

// Quitar Item del Carrito
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Cambios de Cantidad
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
// Agregar Al Carrito
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName;("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName;("precio")[0].innerText;
    var productImg = shopProducts.getElementsByClassName;("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("carrito-box");
    var cartItems = document.getElementsByClassName("carrito-content")[0]
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        alert("Ya Agregaste este producto al carrito");
    }
}
var cartBoxContent

// Actualizar el Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("carrito-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("carrito-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cantidad")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-precio")[0].innerText = "$" + total;
    }
}