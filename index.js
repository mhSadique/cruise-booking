// In the name of Allah

let ticketIncreaseFirst = document.getElementById('plus-btn-first');
let ticketDecreaseFirst = document.getElementById('minus-btn-first');
let ticketQuantityFirst = document.getElementById('quantity-first');
let subTotalAmount = document.getElementById('subtotal');
let subTotalAmountNum;
let totalAmount = document.getElementById('total');
let vatAmount = document.getElementById('vat');
let vatAmountNum;
let ticketPriceFirst = 150;
let ticketPriceEconomy = 100;
let bookBtn = document.getElementById('book-btn');

// handling the first class ticket portion
ticketIncreaseFirst.addEventListener('click', function () {
    ticketQuantityFirst.value++;
    subTotalAmount.innerText = (parseFloat(ticketQuantityFirst.value) * 150) + (parseFloat(ticketQuantityEconomy.value) * 100);
    subTotalAmountNum = parseInt(subTotalAmount.innerText);
    vatAmount.innerText = (10 * subTotalAmountNum) / 100;
    vatAmountNum = parseInt(vatAmount.innerText);
    totalAmount.innerText = subTotalAmountNum + vatAmountNum;
});

ticketDecreaseFirst.addEventListener('click', function () {
    ticketQuantityFirst.value--;
    if (ticketQuantityFirst.value < 0) {
        ticketQuantityFirst.value = 0;
    }
    subTotalAmount.innerText = (parseFloat(ticketQuantityFirst.value) * 150) + (parseFloat(ticketQuantityEconomy.value) * 100);
    subTotalAmountNum = parseInt(subTotalAmount.innerText);
    vatAmount.innerText = (10 * subTotalAmountNum) / 100;
    vatAmountNum = parseInt(vatAmount.innerText);
    totalAmount.innerText = subTotalAmountNum + vatAmountNum;
});

// handling the economy class ticket portion
let ticketIncreaseEconomy = document.getElementById('plus-btn-economy');
let ticketDecreaseEconomy = document.getElementById('minus-btn-economy');
let ticketQuantityEconomy = document.getElementById('quantity-economy');


ticketIncreaseEconomy.addEventListener('click', function () {
    ticketQuantityEconomy.value++;
    subTotalAmount.innerText = (parseFloat(ticketQuantityFirst.value) * 150) + (parseFloat(ticketQuantityEconomy.value) * 100);
    subTotalAmountNum = parseInt(subTotalAmount.innerText);
    vatAmount.innerText = (10 * subTotalAmountNum) / 100;
    vatAmountNum = parseInt(vatAmount.innerText);
    totalAmount.innerText = subTotalAmountNum + vatAmountNum;
});
ticketDecreaseEconomy.addEventListener('click', function () {
    ticketQuantityEconomy.value--;
    if (ticketQuantityEconomy.value < 0) {
        ticketQuantityEconomy.value = 0;
    }
    subTotalAmount.innerText = (parseFloat(ticketQuantityFirst.value) * 150) + (parseFloat(ticketQuantityEconomy.value) * 100);
    subTotalAmountNum = parseInt(subTotalAmount.innerText);
    vatAmount.innerText = (10 * subTotalAmountNum) / 100;
    vatAmountNum = parseInt(vatAmount.innerText);
    totalAmount.innerText = subTotalAmountNum + vatAmountNum;
});

// handling the booking button
bookBtn.addEventListener('click', function() {
    alert(`Dear customer, you have booked for ${ticketQuantityFirst.value} first-class ticket(s) and ${ticketQuantityEconomy.value} economy-class ticket(s) with a total charge of ${totalAmount.innerText} including 10% VAT. Thanks`);
});
