const readlineSync = require('readline-sync');

console.log('Калькулятор налога на доходы');

const income = readlineSync.question('Доходы: '); 

const rate = 0.15;

const incomeTaxCalculator = (x) => {
    
    const result = x * 0.15;
    return result;
};

console.log(`Ответ: ${incomeTaxCalculator(income)}`);
