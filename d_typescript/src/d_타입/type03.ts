export const tmp = '';

// 타입 별칭 (Type Alias)
//: 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
// >> 코드의 재사용성과 가독성 향상

// 기본 사용 방법 : type이라는 키워드를 사용하여 정의 >> type 타입별칭 = 타입;

//변수 타입 별칭 -사용안함
type TextType = string; //타입 별칭은 다른 코드와의 식별을 위해 대문자로 시작

let textMsg: string = '텍스트 문자열입니다.';

type NumberType = number;
let num: NumberType = 1623;

// 객체 타입 별칭 @@중요@@
//: 타입 별칭 내에서도 선택적 프로퍼티 & 읽기 전용 속성 사용 가능

type UserType = {
  name?: string;
  readonly height: number;
}

const user1: UserType = {
  name: '이승아',
  height: 190
}

// user1.height = 170; 에러

const user2: UserType = {
  height: 170
}

//함수 타입 별칭
//: User타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
type User = {
  id: string;
  password: string;
}

type ValidUser = (user: User) => boolean;

const isValidUser: ValidUser = (user) => {
  return user.id !== '';
} //@@@@@@@@ 줄여쓸수있다 깃에 올린거 보기

let userA: User = {
  id: 'qwerty',
  password: 'qwe124'
}

let userB: User = {
  id: '',
  password:'qweqwe123123'
}

console.log(isValidUser(userA));
console.log(isValidUser(userB));

//함수 타입 지정 시 반환 값이 없는 경우의 타입: void
// type VoidFunc = () => void;

//==타입 별칭 사용==

//문제1
type Age = number;
type IsStudent = boolean;

let age: Age = 20;
let student = false;

//틀림 .. 깃확인하기@@@

//문제2
type ProductType = {
  id: string;
  name: string;
  price: number;
}

let product: ProductType = {
  id: 'hhj',
  name: '황현지',
  price: 20000
}

console.log(product);
