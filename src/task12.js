const readlineSync = require('readline-sync');

console.log('Реверс строки с исключением слов');

const str = readlineSync.question('Строка: ');
const exception = readlineSync.question('Слово: ');

const reverseStringWithException = (x, y) => {

    const reverse = y.split('').reverse().join('');

    const result = x.replace(y, reverse);

    return result;
};

console.log(`Ответ: ${reverseStringWithException(str, exception)}`);
