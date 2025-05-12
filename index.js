const PasswordGenerator = require('alex_pass_generat');

const generator = new PasswordGenerator();

// Генерация пароля длиной 16 символов с использованием всех типов символов
const password = generator.generate(16);
console.log('Пароль:', password);

// Генерация пароля длиной 10 символов только с буквами и цифрами
const password2 = generator.generate(10, true, true, true, false);
console.log('Пароль 2:', password2);