// const app = Vue.createApp({
//     data: () => ({
//         message: 'Hello'
 
//     }),
//     methods: {
//         clickHandler: function(event) {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })
// app.mount('#app')
const INCREMENT = 1
const DECREMENT = -1

function updateMeter(counterValue) {
    const meter = document.querySelector('#meter');
    const maxWidth = 200;
    const newWidth = (maxWidth / 10) * counterValue;
    meter.setAttribute('width', newWidth);
}

const counterElement = document.querySelector('#counter');

function updateCounter(amount) {
    let currentValue = parseInt(counterElement.textContent);

    if (amount > 0 && currentValue < 10) {
        currentValue += amount;
    }
    else if (amount < 0 && currentValue > 0 ) {
        currentValue += amount;
    }

    counterElement.textContent = currentValue
    updateMeter(currentValue)
}

const countUpButton = document.querySelector('#countup');
countUpButton.addEventListener('click', () => updateCounter(INCREMENT));

const countDownButton = document.querySelector('#countdown');
countDownButton.addEventListener('click', () => updateCounter(DECREMENT));

