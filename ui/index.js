
// define initial cart
let custCart = {
    items: [],
    total: 0,
};

/*
This is your "startup" script that will run after DOM is ready
this is a jQuery
*/

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

function addBalance(obj) {
    let userBalance = document.getElementById("user-balance");
    let amount = document.getElementById(obj.id).innerHTML;
    
    
    console.log(amount);
    console.log(userBalance.innerHTML)
    userBalance.innerHTML = parseFloat(userBalance.innerHTML) + parseFloat(amount);
    
}

function displayItems() {
    console.log("I am inside getItems");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://0.0.0.0:8080/items");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        displayHTMLItems(data)
        return data;
    } else {
        console.log(`Error: ${xhr.status}`);
        return null;
    }
    };
}

function displayHTMLItems(items) {
    items.forEach(item => {
        
        //if (item.type == "Drinks") {
        console.log(item.type);
        let column = document.getElementsByClassName("col-drinks");
        column[0].innerHTML += "<p>Hello Drinks</p>";
        //}
    });
}

function purchase() {
    let totalAmount = parseFloat(document.getElementById("cart-total").innerHTML);
    let userBalance = parseFloat(document.getElementById("user-balance").innerHTML);
    const remainingBalance = userBalance - totalAmount;

    console.log(userBalance)
    if (remainingBalance < 0.00) {
        alert("insufficient amount! you need $" + remainingBalance + " more");

    } else {
        alert("purchased!\ntotal amount: $" + totalAmount);
        //reset items in the carts
        // set pricing total to $0 when user purchased / buy

        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("cart-total").innerHTML = 0;
        document.getElementById("user-balance").innerHTML = remainingBalance;
        custCart.items = [];
        custCart.total = 0;
    }
    

}
