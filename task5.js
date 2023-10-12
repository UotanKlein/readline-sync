const readlineSync = require('readline-sync');

console.log('Расчет расстояния между двумя точками в 2D');

const one = readlineSync.question('x1: '); 
const three = readlineSync.question('y1: '); 

const two = readlineSync.question('x2: '); 
const four = readlineSync.question('y2: '); 

const calculateDistance = (x1, y1, x2, y2) => {

    const x = Math.abs(x1) + Math.abs(x2);
    const y = Math.abs(y1) + Math.abs(y2);

    result = Math.sqrt(x ** 2 + y ** 2);

    return result;
};

console.log(`Ответ: ${calculateDistance(one, three, two, four)}`);
