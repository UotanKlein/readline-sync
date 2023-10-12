const readlineSync = require('readline-sync');

console.log('Расчет периметра и площади прямоугольника');

const width = readlineSync.question('Ширина треугольника: '); 
const height = readlineSync.question('Высота треугольника: '); 

const calculateRectangleProperties = (w, h) => {
    
    const S = w * h;
    const P = 2 * w + 2 * h;
    console.log(`Площадь: ${S}`);
    console.log(`Периметр: ${P}`);
};

calculateRectangleProperties(width, height);
