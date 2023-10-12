const readlineSync = require('readline-sync');

console.log('Калькулятор расходов и доходов');

const incomes = readlineSync.question('Доходы: ');
const expenses = readlineSync.question('Расходы: ');

const calculateBalance = (x1, x2) => {
    
    const result = Number(x1) - Number(x2);
    return result;
};

console.log(`Ответ: ${calculateBalance(incomes, expenses)}`);
