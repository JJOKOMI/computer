//: asynchronous : 비동기적인

// 비동기프로그래밍 : 콜백 함수
// 다른 함수에 인자로 전달되어, 해당함수에 의해 어느 시점에 호출되는 함수

//콜백함수
function greet(callback){ //
  console.log('이름입력');
}

//메인함수 : 사용자의 입력차리
function getUserinput(){
  let name = prompt('이름을 입력해주세요');
  callback(name);
}

getUserinput(greet);