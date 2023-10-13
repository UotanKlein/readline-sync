const readlineSync = require('readline-sync');

console.log('Генератор случайных уравнений');

const generateRandomEquation = () => {

    const a = String(Math.round(Math.random() * 100));
    const b = String(Math.round(Math.random() * 100));
    const c = String(Math.round(Math.random() * 100));

    const x = (c - b) / a;

    console.log(`x = ${x}`)
    const result = `${a}x + ${b} = ${c}`;

    return result;
};

console.log(`Ответ: ${generateRandomEquation()}`);
