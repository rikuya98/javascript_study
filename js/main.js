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
  

const counterElement = document.querySelector('#counter');

function updateCounter(amount) {
    counterElement.textContent = parseInt(counterElement.textContent) + amount
}

const countUpButton = document.querySelector('#countup');
countUpButton.addEventListener('click', () => updateCounter(1));

const countDownButton = document.querySelector('#countdown');
countDownButton.addEventListener('click', () => updateCounter(-1));
