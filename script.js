var cartItems = [];

function addToCart(name, price, id) {
    var item = {
        name: name,
        price: price
    };
    const element = document.getElementById(id) ;
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    var cartItemsList = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    cartItemsList.innerHTML = '';

    cartItems.forEach(function(item) {
        var li = document.createElement('li');
        li.innerText = item.name + ' - ' + item.price + ' INR';
        cartItemsList.appendChild(li);
    });

    var total = cartItems.reduce(function(acc, item) {
        return acc + item.price;
    }, 0);

    cartTotal.innerText = total;
}

function goToCart() {
    var cartContainer = document.getElementById('cart-container');
    cartContainer.scrollIntoView({ behavior: 'smooth' });
}