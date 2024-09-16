// test 1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));



// test 2
setInterval(() => {
    console.log("Прошла секунда");
}, 1000);




// test 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();



// test 4
const block = document.getElementById('myBlock');
    block.addEventListener('click', () => {
 });





    // test 5
xhr = new XMLHttpRequest();
xhr.open("GET", "../test.json", true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error('Ошибка: ' + xhr.status);
    }
};
xhr.onerror = function() {
    console.error('Ошибка запроса');
};

xhr.send();
