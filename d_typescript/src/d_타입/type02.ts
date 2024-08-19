export const tmp = '';

//타입스크립트의 객체 타입

//1. 객체 타입 지정(명시)
// : {} 중괄호를 사용하여 표현
// >> 각 데이터별 타입 명시의 구분은 세미콜론(;) 사용을 권장

//기본변수 는 const user: string = '이승아'; 로 사용

const user: {   
  //각 타입 구분 시 콤마와 세미콜론 모두 사용 가능
  name: string;
  height: number;
  favorite: any[];
  //>> 타입에서 명시한 속성은 반드시 객체 내부에 존재!! 아니면 에러남
} = {
  //객체 내부에서 각 속성의 구분은 콤마로 표시
  name: '이승아',
  height: 169,
  // hobby: 'exercise' -- error >> 객체는 타입 명시를 하지 않은 속성은 정의할 수 없다.
  favorite: ['운동', 1, false,['안녕',1]]

}

//객체의 선택 속성 @@젤 중요!!@@
// : 선택적 프로퍼티 >> 속성명 뒤에 물음표를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현

const ldk: {
  name: string;                                                          
  height?: number; // 타입 명시 속성 뒤에 물음표를 작성(선택적 프로퍼티, 해당 속성이 존재하지 않을수도있음--height 생략해도 오류 안남)

} = { 
  name: '이도경',
  // height: 157 생략해도 오류 안남

}
//읽기 전용 속성 @@중요!!@@
// : 속성명 "앞"에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지
// : 해당 키워드가 붙은 속성은 const키워드를 사용해서 정의한 변수와 유사(상수)

const readonlyName: {
  readonly name: string;
  readonly age: number;
  address?: string;
} = {
  name: '황현지',
  age : 50,
  address: '부산시 부산진구'
}

// 객체의 속성값 수정
// 객체.속성 =재할당값;
// readonlyName.name = '이승아'; 읽기전용 속성은 재할당 불가
readonlyName.address = '부산시 연제구';

console.log(readonlyName);

//==객체 타입 어노테이션==

//문제1
const person: { //let도 상관없음
  name: string;
  age: number;
  hobby?: string;
} = {
  name: '황지완',
  age: 28
}

//문제2
const car: {
  readonly model: string;
  year: number;
} = {
  model: 'hyundai',
  year: 2024
}

// car.model = 'audi'; 읽기전용 속성이기때문에 에러가 발생한다.