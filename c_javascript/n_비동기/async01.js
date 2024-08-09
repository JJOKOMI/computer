function work() {
  const start = Date.now(); // 현재 날짜, 시간을 숫자 형태로 반환 ... ~

  for (let i = 0; i < 9999999999; i++){}

    const end = Date.now();
    console.log(end - start + 'ms');
}
work();//7954ms
console.log('동기 작업 후 실행되는 코드')


// work 함수 호출 시 for문 작업중 다른 작업을 동시 처리 x
// for문 완료 될때까지  end 변수 작업x


// ==비동기 프로그래밍

console.log('--비동기 구현--')

function anotherWork() {
  //콜백함수
  //cf)
  //지연시간 뒤에 콜백함수 호출
  //뒤에서 실행됨
  setTimeout(() => {
    const start = Date.now();

    for (let i = 0; i < 9999999999; i++){}

    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);
  //
}

anotherWork();
console.log('비동기 작업 완료 후 실행'); // 비동기 작업 완료 전 실행

//setTimeout()이 대표적인 비동기 프로그램 문법
//: 백그라운드에서 작업이 수행 -> 기존의 코드 흐름을 막지 않는다.

// another 함수 작업 완료 후 수행할 코드 설정
// >> 콜백 함수를 인자로 전달  (함수를 인자로 전달 : 콜백함수)

function callbackWork(){
  setTimeout(() => {
    const start = Date.now();

    for (let i = 0; i < 1999999999; i++){}

    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);
  callback(); //afterWork함수를 callback이라는 이름으로 전달
}

//작업물을 콜백함수로 전달 ?
function afterWork(){
  console.log('작업이 완료되었습니다!!');
}

console.log('1. 작업을 시작합니다.');
callbackWork(afterWork);

console.log('2.시간이 오래걸리는 작업 기다리지않음');

