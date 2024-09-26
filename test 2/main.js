// test 2
const extractNumbers = (str) => {
    return str.match(/\d/g).map(Number);
}
console.log(extractNumbers("a1fg5hj6"));



// 2 task
function fibonacciWithDelay(prev, current) {
    if (current > 144) return;
    console.log(current);

    setTimeout(() => {
        fibonacciWithDelay(current, prev + current);
    }, 1000);
}
fibonacciWithDelay(0, 1);



// 3 task
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}
fetchProducts();




// 4 task
document.getElementById('buttonContainer')
    .addEventListener('click', function(event) {
         if (event.target.tagName === 'BUTTON') {
            const color = event.target.textContent;
            document.body.style.backgroundColor = color;
         }
     });




// 5 task

const square = document.getElementById('square');
const button = document.getElementById('toggleButton');

button.addEventListener('click', function() {
    if (square.style.display === 'none') {
        square.style.display = 'block';
        button.textContent = 'Скрыть блок';
    } else {
        square.style.display = 'none';
        button.textContent = 'Показать блок';
    }
});




// 6 task
let count = 0;
const counterElement = document.getElementById('counter');

const interval = setInterval(() => {
    count += 1;
    counterElement.textContent = count;

    if (count === 100) {
        clearInterval(interval);
    }
}, 1);




//7 task
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}
document.getElementById('fetchDataButton').addEventListener('click', fetchData);

