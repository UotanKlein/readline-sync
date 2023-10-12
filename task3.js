const readlineSync = require('readline-sync');

console.log('Расчет скидки в магазине');

const price = readlineSync.question('Стоимость: '); 
const rate = readlineSync.question('Процент: '); 

const calculateDiscount = (x, y) => {

    const result = x -= x * y;
    return result;
};

console.log(`Ответ: ${calculateDiscount(price, rate)}`);
