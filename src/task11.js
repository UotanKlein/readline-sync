const readlineSync = require('readline-sync');

console.log('Калькулятор бонусов сотрудника');

const salary = Number(readlineSync.question('Зарплата: '));
const performanceRating = Number(readlineSync.question('Рейтинг: '));

const calculateEmployeeBonus = (x, y) => {

    let result = x;

    if (y > 8) {
        result += result * 0.2;
    }
    else {
        result += result * 0.1;
    }

    return result;
};

console.log(`Ответ: ${calculateEmployeeBonus(salary, performanceRating)}`);
