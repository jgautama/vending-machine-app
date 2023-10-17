var items = [
{
    "name": "Sprite",
    "image": "assets/sprite-can.png",
    "currency": "USD",
    "price": 2.49,
    "stock": 15,
},
{
    "name": "Oreo Ice Cream",
    "image": "assets/oreo-bars.png",
    "currency": "USD",
    "price": 5,
    "stock": 20,
},
];

//const vendingMachine = document.getElementById("vending-machine")

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

function purchase() {
    let totalAmount = document.getElementById("cart-total").innerHTML;
    alert("purchased!\ntotal amount: $" + totalAmount)
    
    //reset items in the carts
    document.getElementById("cart-items").innerHTML = "";
    // set pricing total to $0 when user purchased / buy
    document.getElementById("cart-total").innerHTML = "0";
}
