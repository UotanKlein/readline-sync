const readlineSync = require('readline-sync');

console.log('Подсчет количества слов в строке');

const sentence = readlineSync.question('Строка: '); 

const countWords = (x) => {
    
    const words = x.split(' ');
    return words.length;
};

console.log(`Ответ: ${countWords(sentence)}`);
