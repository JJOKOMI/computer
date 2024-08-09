// 사칙연산의 함수를 정의
// >> 각 함수는 인자 값 2개를 받아 연산 후 값을 반환

// add(더하기), subtract(빼기), multiply(곱하기), divide(나누기)

import {add, multiply as mp } from './main.js';
console.log(mp(2,3)); //6
console.log(add(2,3)); //5

import * as main from'./main.js';
console.log(main.divide(10,5)); 1//2
console.log(main.divide(10,0)); // 0으로 나누는 경우 오류 발생

import subtract from './main.js';
console.log(subtract(1,5)); //-4
