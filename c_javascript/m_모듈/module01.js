// import { PI } from './module02';
// import { multiply } from './module02';
import { PI, multiply as mp } from './module02.js'; // 나열가능

console.log(PI);
console.log(mp(2,3));
console.log(multiply(2,3));

//이름 붙여 가져오기의 as구문
//as키워드 (alias : 별칭, 별명)
//가져오는 모듈 내에서 별칭을 사용하여 해당 기능에 대한 참조

function multiply(x,y){
  return x + y;
}
console.log(multiply(2,3));

// 전체 모듈을 별칭으로 가져오기
// 하나의 모듈(파일)을 하나의 별칭으로 가져와, 모듈 내의 모든 기능을 해당 별칭을 통해 접근

// >> 하나의 모듈을 객체로 파악 -> as 별칭 으로 가져와야함

//색깔 희미한 이유 : 코드안에서 사용 안해서 .. ! 사용하면 색깔 진해짐

import * as module02 from './module02.js';

console.log(module02.PI);
console.log(module02.multiply(9, 2));

//기본 가져오기
//import 모듈명(변경x) from './파일의경로.확장자';

import add from './module02.js'

console.log(add(4,5));