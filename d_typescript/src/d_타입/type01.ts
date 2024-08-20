export const tmp ='';

//타입 명시(작성)가 필수 사항은 아님 >> 프로그램의 안정성과 가독성을 높이는 역할

//타임 명시 방법 : 타입 어노테이션(type annotation - 타입 주석) >> 변수명 뒤에 콜론을 사용하여 js코드에 타입을 정의

//타입의 종류 
// 1.기본 타입 (string number boolean)
//변수명 뒤에 콜론 사용 >> typeof 연산자 사용 시 나타내는 변환값과 동일한 이름으로 명시(소문자사용 권장)

let name: string = '황현지';
//권장) let 변수명: 타입명 = 값; 타입 명시 생략은 가능하긴함 ~
let age: number = 50;
let isStudent: boolean = false;

//배열 (list , array)
//순서가 있는 요소의 모음을 나타내는 자료구조
// - 변수명 뒤에 콜론 사용 : 기본타입명 뒤에 배열을 나타내는 []를  첨부
let list1: string[] = ['1', '2', '3'];

// - 제네릭 타입: Array<기본타입>
let list2: Array<number> = [4, 5, 6];

//void타입
// : 텅 빈, 아무런 값이 없다. >> 주로 함수에서 반환값이 없거나 return 키워드가 있더라도 반환하는 값이 없을때 사용되는 타입
//자동으로 void로 (반환값이 없다) 나옴
// function voidType() {
//   return;
// }
function voidType(parameter: number): void { // 함수는 파라미터 타입 무조건 명시해야함
  // 함수의 타입 정의
  // 파라미터와 반환값 정의가능
  // ts에서 "파라미터"에 타입을 명시하지 않으면 오류 발생 : 함수내에서 사용할 변수에 대한 안정성을 요구
  // : 변수의 타입 명시와 동일

  //반환값의 타입 명시는 파라미터를 정의하는 ()소괄호 뒤에 콜론을 붙여 정의 ex) :void
  console.log(parameter);
  return;
}
voidType(10); // 인자 전달안하면 오류-- ()안에 넣어야함 '10'넣으면 오류

function stringReturn(str1: string, str2: string): string { // 두개라면 둘다 따로 타입명시해줘야함
  return '안녕'; // 리턴에는 타입명시안해도됨
}
console.log(stringReturn('1', '2')); // stringReturn()에 값이 없으면 인자전달안해도됨

//null타입 : 아무 것도 없음, 데이터가 잘못된 경우
//undefined타입 : 변수 생성은 했지만 안에 값이 없을 경우

//js/ts에서의 차이점

let nullType: null; // null지정하면 밑에 두개 오류뜸, 변수값 못넣음
// nullType = 3;
// nullType = 'hi';

let undefinedType: undefined; // undefined지정하면 밑에 두개 오류뜸
// undefinedType = 5;
// undefinedType = 'hi';

//any타입(모든) : 모든타입에 대해 허용하는 타입 >> 타입 검사 오류가 발생하는 것을 방지 (모든 타입과 호환가능)
//ts를 js처럼 사용
//사전에 오류 타입을 계산할수없다. (에러방지 x - 사용권장 x)

let anyType: any = 3;
anyType = '문자열';
anyType = false;
anyType = [];
anyType = {};

let unknownData; // 타입을 직접적으로 명시하지 않을 경우 값이 할당되기 전까지 자동으로any타입으로 인식 let unknownData: any

//never 절대 ~ 않다, 부정, 강조 --- 중요하지않음
// 절대 발생하지 않는 값의 타입 명시
// >> 함수가 예외를 발생시키거나 끝나지 않을 때 사용

function error(message: string): never {
  throw new Error(message);
}
// error('에러발생');- 에러

// ==타입 어노테이션 사용==

// 문제1 :
//
let username: string = '황현지';
let userAge: number = 28;
let isSubscribed: boolean = true;

// 문제2 : 배열 타입 정의하기
// 문자열 배열 fruits와 숫자 배열 numbers를 정의

// 문제3 :
//