#!/usr/bin/env node
//При запуске исполняемого файла такая запись позволит выполнить код, который в нём расположен

import { greetUser }  from './../src/cli.js';

// выводит приветственное сообщение
console.log('Welcome to the Brain Games!');

greetUser();
