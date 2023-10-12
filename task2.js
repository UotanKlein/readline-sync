const readlineSync = require('readline-sync');

console.log('Конвертер температуры');

const сelsius = readlineSync.question('Цельсии: '); 

const celsiusToFahrenheit = (c) => {
    
    const fahrenheit = c * 9/5 + 32;
    return fahrenheit;
};

console.log(`Ответ: ${celsiusToFahrenheit(сelsius)}F`);
