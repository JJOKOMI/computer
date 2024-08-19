export const tmp = '';

// union 타입 @@@너무 중요 제일중요!!!@@@ 또는 , or
// : 여러 타입 중 하나가 될 수 있는 값을 나타내는 방법 >> 값에 허용된 타입을 두개 이상으로 지정
// >> or연산자(a 또는 b) >> |(버티컬바) 기호를 사용하여 표현

//유니언 타입의 사용
// >> 변수, 함수의 매개변수, 반환값 등에서 모두 사용 가능
// >> 타입의 유연성을 제공
// 무분별한 any 사용을 방지


//type UnionType = Type1 | Type2 | Type3;

type VariableType = string | number | boolean | string[];
let value: VariableType = '문자';
value = true;
value = ['안녕','반갑'];

// value = [123, 456]; 에러, 넘버형식은 배열에 할당할수없음 
// valud = {}; //에러


// 타입 별칭의 예시
// 관리자 계정 Admin
type Admin = {
  id: string;
  password: string;
  isAdmin: string;

}
// 사용자 계정 User
type User = {
  id: string;
  name: string;
}

//위의 두가지 계정을 가지는 사이트의 계정 타입
type Person =  Admin | User; // 타입별칭이 union타입인 경우 중복되지 않은 타입 속성은 옵셔널(=물음표)와 동일함

/* 
위에 코드는 
type Person = {
  id: string;
  password: string;
  name?: number;
}
과 같다
*/

// let lsa: Person = {
//   id: '123',
//   password: '234'
// }

// let ldk: Person = {
//   id: '188',
//   password: '1888'
// } @@@@@왜 에러가 나지... 확인


//타입 별칭에서 union 타입 사용 시
// 정확한 타입 지정을 위해 타입 가드를 사용
// 타입가드 - 조건문을 통해 타입을 좁혀나가는 방식


// 깃허브 보기!!@@@@@@@@@
type Union = number | string;

function getAge(age: Union) {
  //나이가 입력될 경우 숫자는 소수점 자리가 없도록 반올림하여 문자열로 반환(toFixed()), 문자열은 그대로 반환

  // age.toFixed();
  // age.toUpperCase(); 
  // >> 유니온 타입의 경우 타입 가드를 지정하지 않을 경우 지정된 모든 타입에 사용 할 수 있는 메서드와 속성만 사용가능

  if(typeof age === 'number') {
    age = age.toFixed();
    return age;
  } else {
    age = age.toUpperCase();
    return age;
  }
}

// == Intersection()