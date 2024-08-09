/*
  input 태그에 할일을 입력
  추가 버튼 클릭으로 할 일을 추가
  할일은 ul태그 내에 li태그로 저장
*/

let todoInput = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');

addButton.addEventListener('click', () => {
  //추가 버튼 클릭시 동적으로 li태그 생성
  if (todoInput.value !== ''){
    //동적으로 li태그 생성
    let newItem = document.createElement('li');
    newItem.textContent = todoInput.value;

    //html요소.classList.add('클래스명')
    // 해당 요소의 class속성으로 클래스명을 추가
  }
});