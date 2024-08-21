export const tmp = '';

//동기 처리 프로그래밍

// 1. 정의
// : 코드가 순차적으로 실행되는 것
// >> 한 작업이 완료될때까지 다음 작업은 대기(시작하지 x)

// 2. 특징
// - 순차적 실행, 코드 흐름예측이 용이
// - 간단성 : 프로그램의 이해가 쉬움

function syncFunc01() {
  // 시간 지연을 위한 계산식
  let sum = 0;

  for(let i = 0; i < 9999999000; i++) {
    sum += i;
  }
  return sum;
}
function syncFunc02() {
  // 시간 지연을 위한 계산식
  let sum = 0;

  for(let i = 0; i < 100; i++) {
    sum += i;
  }
  return sum;
}

function example() {
  console.log('첫번째 작업시작');
  let result1 = syncFunc01();
  console.log(`첫번째 작업완료:${result1}`);

  console.log('두번째 작업시작');
  let result2 = syncFunc02();
  console.log(`첫번째 작업완료:${result2}`);
}

example();

// 3. 동기 프로그래밍의 장단점
// 장점 : 간단성, 명확성, 디버깅 용이
// 단점 : 응답성저하, 코드의 활용(사용)도가 저하