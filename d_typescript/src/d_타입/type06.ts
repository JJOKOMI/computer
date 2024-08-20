export const tmp = '';

// 리터럴 타입 (Literal, 문자 그대로의 라는 의미가짐)
// : 특정 값만을 가질 수 있는 타입을 정의할때 사용
// >> 특정 값으로 제한한다는 뜻

// 리터럴 타입의 종류 2가지
// : 해당 값만을 가지는 상수 , 해당값을 타입으로 지정한 변수
//다른 값을 할당하려고 하면 타입 에러가 발생

// 1) const 키워드를 사용하여 직접 리터럴 값을 할당(초기화)

let str1 = '안녕'; // string 타입
str1 = 'gggg'; // 다른 문자를 넣어도 오류 안남

const str2 = '반갑습니다.'; // 타입은 반갑습니다라는 타입임
//str2 = 'hi'; 상수라서 값 재할당 불가

// >> 해당 값을 자동으로 리터럴 값으로 유추

//2) 변수에 타입 명시를 리터럴 값으로 명시
let num1: 123 = 123; // 123으로 타입 고정하면 상수역할됨
// num1 = 234; 에러
// num1 = 345; 에러

let bool1: true = true; // true타입
//bool1 = false; 에러

//리터럴 타입의 활용
// : 주로 type 키워드(타입 별칭)와 함께 사용
// >> 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
// >> 변수 혹은 매개변수가 특정 값들 중 하나만을 가질 수 있도록 제한

//리터럴 타입 예시
// Directions(방향) 타입을 정의

type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions;
moveUp = 'up';
// moveUp = '위'; 위 4가지 값만 가짐 에러남 , 제한할수있다

// 2) 함수의 인자로 리터럴 타입을 지정하여 특정 값으로 제한
function setAlignment(align: 'left' | 'center' | 'right') {
  // 함수 내용
  // let container = document.querySelecter('#container');// 자바스크립트 언어라 오류남 자바스크립트에서 가져와라는 코드임
  //container.style.textAlign = align;
}

setAlignment('center');
// setAlignment('중앙'); 없는값이라 에러

//3) iot 국비반 학생 관리 시스템
type Students = '황현지' | '지수민' | '이승아' | '이도경'
let students: Students;

// students = '김준일'; 이름은 실수할 위험이 있기때문에 타입을 명시하는게 좋음

//리터럴 타입의 경우 여러타입의 혼합이 가능
type mixedType = 'yes' | 'no' | 1 | 2 | 3;

let gameState: mixedType = 'yes';
gameState = 3;
gameState = 1;
// gameState = 123; 에러 정확한 값을 넣어줘야함

// 객체 리터럴 타입 : 실제 객체 데이터 정의
type UserType = {
  name: '이승아';
  height: 169;
}

let user: UserType = {
  name: '이승아',
  height: 169
  // height: 170 에러남 170형식은 169 형식에 할당할수 없습니다.
};

// user.name = '이도경'; 재할당불가

// 객체의 구조적 타이핑(덕 타이핑) : 객체의 타입을 실제 값보다는 그 구조나 멤버에 의해 결정하는 방식
// >> 객체의 형태가 같다면, 같은 타입으로 간주

type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Name: ${person.name}, age: ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name: '황현지',
  age: 25
}

const p2 = {
  name: '지수민',
  age: 24,
  hobby: '마루보기'
}

const p3 = {
  name: '쪼꼬미'
}

greet(p1); // Person과 구조가 일치하기 때문에 Person으로 취급
greet(p2); // 구조적 타이핑에 의해 Person으로 취급 (hobby속성무시)
// greet(p3); >> Person타입 속성 구조와 일치하지 않음, 나이 없음

//중첩된 객체 타입 정의
type Address = {
  street: string;
  readonly city: string;
  zipCode: string;
}

type UserProfile = {
  username: string;
  email: string;
  address: Address;
}

let userA: UserProfile = {
  username: '황현지',
  email: 'qwe123',
  address: {
  street: '123 st',
  city: 'Busan',
  zipCode:'12345'
  }
}

// userA.address.city = '대전'; >> 리드온리 값이라 재할당불가
userA.address.street = '중앙대로';

// 객체의 인덱스 서명
// :객체의 모든 속성에 대해 타입을 정의하지 않고 키와 값의 타입만 정의하여 구조를 유연하게 적용하는 방법

type UserDataType = {
  name: string; // 일반적인 객체 속성 타입 명시

  //인덱스 서명 사용방법 : [propertyName: indexType]: valueType;
  //키의 타입과 값의 타입을 미리명시

  [key: string]: string | number | boolean; // 키는 string사용 권장
  //valueType에는 어떤 타입이든 가능
}

let user1: UserDataType = {
  name: '이승아',
  age: '50',
  height:170,
  isTeacher: true
}

user1.email = 'qwe123'