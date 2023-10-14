
// define initial cart
let custCart = {
    items: [],
    total: 0,
};

function addToCart(item, amount) {
    addItem(item, amount);
    updateCart();
}

function addItem(item, amount) {
let totalAmount = document.getElementById("cart-total");
custCart.total += amount;
custCart.items.push(item);
totalAmount.innerHTML = custCart.total;
}

function updateCart() {
    let summaryCart = document.getElementById("cart-items");
    summaryCart.innerHTML = "";  
    custCart.items.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = item;
        summaryCart.appendChild(cartItem);
    });
}
