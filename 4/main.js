const discountInput = document.querySelector('input[type="range"]');
const discountDisplay = document.querySelector('span');

discountInput.addEventListener('input', function () {
    discountDisplay.textContent = `${this.value}%`;
});

const result = document.getElementById('courseResult');

let coursePrice = parseFloat(courseName);
let discount = parseFloat(discountInput.value);
let discountedPrice = coursePrice - (coursePrice * discount / 100);
result.innerHTML = `Итоговая стоимость: ${discountedPrice}`;

phoneInput.value = `+${this.value}`;