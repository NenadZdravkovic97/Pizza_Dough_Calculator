// DOM ELEMENTS
// Pizza calc form
let pizzaNumInput = document.querySelector('#pizzaNum');
let ballWeightInput = document.querySelector('#doughballWeight');
let waterAmountInput = document.querySelector('#waterAmount');
let calcForm = document.querySelector('#calcForm');

// Span elements to fill with calculated data
let flourSpan = document.querySelector('#flour');
let waterSpan = document.querySelector('#water');
let saltSpan = document.querySelector('#salt');
let yeastSpan = document.querySelector('#yeast');

let flourAmount = () => {
    let total = pizzaNumInput.value * ballWeightInput.value;
    let flour = total / ((100 + parseInt(waterAmountInput.value) + 3 + 0.2) / 100);
    // return flour.toFixed(1)
    return Math.round(flour);
}

let waterAmount = () => {
    let flour = flourAmount()
    let water = flour * (waterAmountInput.value / 100);
    return water.toFixed(1)
}

let saltAmount = () => {
    let flour = flourAmount()
    let salt = flour * 0.03;
    return salt.toFixed(1)
}

let yeastAmount = () => {
    let flour = flourAmount();
    let yeast = flour * 0.002;
    return yeast.toFixed(1)
}


calcForm.addEventListener("submit", (e) => {
    let flour = flourAmount();
    let water = waterAmount();
    let salt = saltAmount();
    let yeast = yeastAmount();
    flourSpan.textContent = flour + ' g';
    waterSpan.textContent = water + ' ml';
    saltSpan.textContent = salt + ' g';
    yeastSpan.textContent = yeast + ' g';
    e.preventDefault();
});