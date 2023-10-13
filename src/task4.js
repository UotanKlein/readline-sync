const readlineSync = require('readline-sync');

console.log('Расчет периметра и площади прямоугольника');

const width = readlineSync.question('Ширина треугольника: '); 
const height = readlineSync.question('Высота треугольника: '); 

const calculateRectangleProperties = (w, h) => {

    const S = w * h;
    const P = 2 * w + 2 * h;

    const arrya = [S, P];
    return arrya;
};

console.log(`Площадь: ${calculateRectangleProperties(width, height)[0]}\nПериметр: ${calculateRectangleProperties(width, height)[1]}`);
