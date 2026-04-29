let time = localStorage.getItem('time') || 0;
let price = localStorage.getItem('price') || 100;
let date = Date.now();

if (date - time > 10000) {
  price += 10;
  localStorage.setItem('price', price);
  localStorage.setItem('time', date);
}

document.getElementById('amount').innerText = price;