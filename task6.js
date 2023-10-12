const readlineSync = require('readline-sync');

console.log('Расчет времени пути');

const distance = readlineSync.question('Дистанция: '); 
const speed = readlineSync.question('Скорость: '); 

const calculateTime = (x, y) => {
    
    const result = x / y;
    return result;
};

const time = calculateTime(distance, speed);
const hours = Math.round(time);
const minute = Math.round((time - hours) * 100);

console.log(`Ответ: ${hours}ч. ${minute}м.`);
