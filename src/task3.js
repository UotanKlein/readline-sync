const readlineSync = require('readline-sync');

console.log('Расчет скидки в магазине');

const price = Number(readlineSync.question('Стоимость: ')); 
const rate = Number(readlineSync.question('Процент: ')); 

const calculateDiscount = (x, y) => {

    let result = x;

    if (Math.floor(y) > 0) {
        result = x -= (x * y) / 100;
    }
    else {
        result = x -= x * y;
    }

    return result;
};

console.log(`Ответ: ${calculateDiscount(price, rate)}`);
