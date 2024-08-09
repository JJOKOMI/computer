// event02.js

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// 이벤트 객체를 전달받아
// : '이벤트가 발생된 요소'의 배경을 변경
// >> event(이벤트 객체).target
function bgChange(event) {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // event.target: HTML 요소 (JS DOM 요소 - 객체)
  event.target.style.backgroundColor = randomColor;
}

//! 이벤트 '객체'
// : 이벤트 핸들러가 호출될 때
//   , 브라우저가 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에 전달
// >> 이벤트와 관련된 다양한 속성과 메서드가 포함

//? 이벤트 객체의 속성과 메서드

// 1. type
// : 이벤트 유형을 지정 ('click', 'change' 등)

// 2. target
// : 이벤트가 발생한 요소를 참조 
// >> 실질적으로 이벤트가 발생한 요소
// >> 이벤트 발생 시 변경을 적용할 요소를 결정하는 데 유용

// 3. currentTarget
// : 이벤트 리스너가 실제로 첨부된 요소를 참조

// 4. preventDefault()
// : 브라우저가 해당 이벤트에 대해 기본적으로 수행하는 동작을 방지

// 5. stopPropagation()
// : 이벤트가 전파되는 것을 방지

// 예) 마우스 이벤트 - 마우스의 위치, 버튼 상태 등
//     키보드 이벤트 - 눌려진 키에 대한 정보를 포함

//? 이벤트 객체 사용 방법
// : 이벤트가 발생하는 함수에 매개변수로 전달
// >> 매개변수의 명을 event, evt, e 등으로 명명을 권장

const colorChangeButton = document.querySelector('#colorChangeButton');

colorChangeButton.addEventListener('click', bgChange);

const divs = document.querySelectorAll('.colorDiv');

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bgChange);
}

// === 이벤트 객체 실습 ===
// 16개의 타일 세트
// querySelectorAll()을 사용 >> 16개의 참조를 tiles 상수에 할당
// >> 반복문 사용으로 16개의 타일에 이벤트 핸들러 등록

const tiles = document.querySelectorAll('.tile');

function tileChange() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  return randomColor;
}

for (let i = 0; i < tiles.length; i++) {
  tiles[i].onclick = function(e) {
    e.target.style.backgroundColor = tileChange();
  }
}
