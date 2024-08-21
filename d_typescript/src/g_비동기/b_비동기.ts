export const tmp = '';

//비동기 처리 프로그래밍

//정의 : 앞선 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행하는 것
//     : 프로그램의 메인 흐름과 병렬적으로 작업 할 수 있는 프로그래밍 방식
// >> 작업이 완료되면 결과를 받음

// 2. 특징
// 응답성 향상 : 사용자 응답이 블로킹(막히지)되지않고 긴 작업은 백그라운드에서 수행

// 3. 장단점
// 장점 : 병렬처리와 효율성, 응답성 향상
// 단점 : 복잡성 증가, 디버깅 어려움

// 콜백함수 >> setTimeout()에 대한 콜백 함수 사용 : 인자로 함수를 전달 받음, 지연 될 밀리초를 0으로 지정(곧바로 실행)

function syncFunc01() {
  setTimeout(() => {
    let sum = 0;

    for(let i = 0; i < 9999999000; i++) {
      sum += i;
    }
    console.log(`첫번째 : ${sum}`)
  }, 0);
}


function syncFunc02() {
  setTimeout(() => {
    let sum = 0;

    for(let i = 0; i < 100; i++) {
      sum += i;
    }
    console.log(`두번째 : ${sum}`)
  }, 0);
}

function example() {
  console.log('첫번째 작업시작');
  syncFunc01();

  console.log('두번째 작업시작');
  syncFunc02();
}

example();