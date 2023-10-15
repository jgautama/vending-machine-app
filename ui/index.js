
// define initial cart
let custCart = {
    items: [],
    total: 0,
};

/*
This is your "startup" script that will run after DOM is ready
this is a jQuery
*/

$(document).ready(() => {
    const data = getItems();
    displayHTMLItems(data);
});

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

function getItems() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://0.0.0.0:8080/items");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        return data;
    } else {
        console.log(`Error: ${xhr.status}`);
        return null;
    }
    };
}

function displayHTMLItems(items) {
    items.forEach(item => {
        
        if (item.type == "Drinks") {
        //     //console.log(item)
            let column = document.getElementsByClassName("col-drinks");
            console.log(column)
            column[0].innerHTML += "<p>Hello World</p>"
        //     let itemSection = document.createElement("div");
        //     itemSection.innerHTML += "<p>item.name</p>";
        //     column.appendChild(itemSection);
            
        }
        //let column = document.getElementsByClassName("col" + item.type)
    });
}