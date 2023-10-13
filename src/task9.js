const readlineSync = require('readline-sync');

console.log('Расчет средней оценки');

const grades = readlineSync.question('Оценки через пробел от 1 до 10: '); 

const calculateAverageGrade = (x) => {

    const isBelowThreshold = (currentValue) => currentValue <= 10 && currentValue >= 1;

    const split = x.split(' ');
    const count = split.length;
    const convert = split.map((x) => Number(x));

    if (convert.every(isBelowThreshold)) {

    const sum = convert.reduce((partialSum, a) => partialSum + a, 0);
    const result = sum / count;
    
    return result;
    }

    return 'Ошибка, введите числа от 1 до 10.';
};

const calculateAverageGrade2 = (x) => {

    const count = x.split(' ').length; 

    const g1 = x.split('1').length - 1;
    const g2 = x.split('2').length - 1;
    const g3 = x.split('3').length - 1;
    const g4 = x.split('4').length - 1;
    const g5 = x.split('5').length - 1;
    const g6 = x.split('6').length - 1;
    const g7 = x.split('7').length - 1;
    const g8 = x.split('8').length - 1;
    const g9 = x.split('9').length - 1;
    const g10 = x.split('10').length - 1;

    const result = ((1 * g1) + (2 * g2) + (3 * g3) + (4 * g4) + (5 * g5) + (6 * g6) + (7 * g7) + (8 * g8) + (9 * g9) + (10 * g10)) / count;

    console.log(`Ответ: ${result}`);
};

console.log(`Ответ: ${calculateAverageGrade(grades)}`);

calculateAverageGrade2(grades);
