const readlineSync = require('readline-sync');

console.log('Расчет расстояния между двумя точками в 2D');

const one = readlineSync.question('x1: '); 
const three = readlineSync.question('y1: '); 

const two = readlineSync.question('x2: '); 
const four = readlineSync.question('y2: '); 

const calculateDistance = (x1, y1, x2, y2) => {

    const x = x2 - x1;
    const y = y2 - y1;

    result = Math.sqrt(x ** 2 + y ** 2);

    return Math.abs(result);
};

console.log(`Ответ: ${calculateDistance(one, three, two, four)}`);
