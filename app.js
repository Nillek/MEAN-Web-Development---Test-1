const hello = require('./modules/hello');
const express = require('express');

const app = express();

hello.sayHello();

console.log("It's working!");