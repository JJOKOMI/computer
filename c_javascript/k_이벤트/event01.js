function random(number) {
  return Math.floor(Mate.random() * (number + 1));
}
// console.log(Math.random()); // 0 <= x < 1
// console.log(Math.random() * 100); // 0 <= x < 100
// console.log(Math.random() * 101); // 0 <= x < 101 (100을 포함)

//randomColor 함수 정의 : 랜덤 색상 생성
function randomColorFunc(){
//
//
//
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

const bgButton = document.querySelector('#bgChange'); // html 요소를 참조\
//html에서 bgChange라는 아이디의 주소값을 가지고온다

bgButton.onmouseout = function() {
  const randomColor = randomColorFunc();

  bgButton.style.backgroundColor = randomColor;
}

const btnButton = document.querySelector('#btn');
btnButton.onclick = function(){
  console.log('버튼이 클릭되었습니다.');
}

