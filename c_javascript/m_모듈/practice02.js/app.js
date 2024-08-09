import { TodoManager } from "./todoManager.js";

// TodoManager의 인스턴스를 생성 !!
const todoManager = new TodoManager();

//HTML 요소 가져오기

const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 제출 이벤트 방지

  //form 내부에서 데이터를 할 일 목록에 추가
  const text = input.value.trim();

  if(text !== ''){ // 텍스트가 비워져 있지 않다면
    todoManager.addTodo(text);
    input.value = '';
    updateTodolist(); //할일 목록 업데이트
  }
});

//할일 목록을 업데이트하는 함수
function updateTodolist(){
  // 모든 할일을 가져오기
  const todos = todoManager.getTodos(); // getTodos의 역할 : 배열 반환

  //ul 태그 내부의 데이터(내용)를 삭제
  //1,2,3 li태그를 삭제하고 4만 추가하는게 아니라 123을삭제하고 1234를 추가하는 것
  //html요소.innerHtml
  //: 요소 내부의 전체 html 코드를 문자열로 가져오기
  todoList.innerHTML = '';

  todos.forEach(todo => {
    // 태그에 사용될 텍스트 그대로를 전달
    const li = document.createElement('li');

    li.textContent = todo.text;

    if(todo.completed) { // 순회되는 요소의 완료 여부가 true라면 
      li.classList.add('completed');
    }else{
      li.classList.remove('completed');
    }

    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodolist();
      
  });

  //삭제 버튼 생성
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');

  // 삭제 버튼 클릭 시 해당 할일 항목 제거
  deleteButton.addEventListener('click', (e) =>{
    todoManager.removeTodo(todo.id);
    updateTodolist();
  });

  // ui >> li >> button
  li.appendChild(deleteButton);

  todoList.appendChild(li);

  });
}

updateTodolist();