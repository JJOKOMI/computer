export const tmp = '';

//@@제네릭 01, 04 는 잘알기@@

//제네릭 (일반적인 , 공통적인 이라는 뜻을 가짐)

// 1. 정의 : 재사용 가능한 컴포넌트 (코드 단위)를 만드는데 사용
// >> 해당 컴포넌트가 처리할 데이터 타입을 미리 지정하지 않고 해당 컴포넌트를 사용하는 시점에서 원하는 데이터 타입 지정

// 2. 제네릭 필요성
// - 코드의 중복을 줄임
// - 재사용 가능한 컴포넌트를 생성
// - 타입 안정성을 보장
// >> 컴파일 시점에서 타입을 체크 (런타임 환경에서 발생 할 수 있는 에러를 방지)

// 컴파일 타임 : 소스코드를 작성하고 편집하는 과정 -- 지금이 컴파일 타임
// 런타임 : 컴파일 과정을 마친 프로그램이 사용자에 의해 실행되어 동작되어지는 때 ex) tsc ~.ts

// 3. 제네릭 기본 문법
// : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름 뒤에 꺽쇠괄호 <> 안에 타입 변수를 지정 -- 변수는 잘 사용안함
// >> 함수나 클래스 등을 사용할 때 활용할 타입을 명시

// 타입변수 : 임의의 키워드를 사용하여 명시, 일반적으로 대문자 알파벳 하나를 사용 (T: type , U: 의미없음(t다음순서라 씀), ...)
// >> 해당 타입 변수는 컴포넌트 내에서 실제 데이터 타입의 자리를 대신

function generic<T>(arg: T) { // 함수 정의 시 타입 변수 지정
  // 타입 변수 T (단일 타입 변수)
  return arg;
}

let str01 = generic<string>('안녕하시오'); // 함수 호출 시 타입 변수에 활용할 타입을 명시, string number 등 가능
let str02 = generic('안녕하시오'); // <>안넣어도 오류 안남 제네릭의 경우 타입 변수에 값을 유추 가능(문자열이 들어가있기때문에)
// let str03 = generic<string>(123); //에러

// 여러 제네릭 타입 변수 지정
// : 여러 개의 독립적인 타입을 처리 할 경우 사용

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let pariOutput = pair<string, number>('안녕', 345);
let pariOutput2 = pair<number, string>(345, '하이');

function pair2<T, U>(first: T, second: T): U { // U를 T[]로 작성가능
  return [first, second] as U;
}

let pair2Output = pair2<string, string[]>('hi', 'hi2'); // ['hi', 'hi2']

// 제네릭 함수 : 주로 매개변수의 타입을 지정하는 경우가 많음

function genericFunc<T>(args: T[]): T[] {
  console.log(`배열길이 : ${args.length}`);
  return args;
}

let resultFunc = genericFunc<boolean>([true, false, false]);
console.log(`함수 반환값 : ${resultFunc}`);

// 3. 제네릭 인터페이스 : 타입 매개변수 T를 가지는 인터페이스 -- 잘안씀
interface IGeneric<T> {
  (key: T): T; // 인터페이스 내부의 속성 타입을 명시

}

function example<T>(arg: T): T {
  return arg;
}
let myGeneric: IGeneric<number> = example;


console.log(example(5));
console.log(myGeneric(5));

// 4. 제네릭 클래스 -- 잘안씀
class GenericClass<T> {
  value: T;
  add: (x: T, y: T) => T;

  constructor(value: T, addFunc: (x:T, y:T) => T){
    this.value = value;
    this.add = addFunc;
  }
} 

let myGenericNumber = new GenericClass<number>(0, function (x,y) { return x + y}) // ()안에 굳이 타입 명시 안해도 되는이유 앞에 명시가 되어있어서 ??