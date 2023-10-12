const readlineSync = require('readline-sync');

console.log('Калькулятор бонусов сотрудника');

const salary = Math.round(Math.random() * 10000);
const performanceRating = Math.round(Math.random() * 10);

console.log(`Зарплата: ${salary}\nРейтинг: ${performanceRating}`);

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
