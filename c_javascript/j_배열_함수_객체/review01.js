let todos = []; // 배열 초기화

//할일을 추가하는 함수
//고유 id, 내용, 완료 상태를 가지는 객체를 생성 >> 배열에 추가
function addTodo(content){ // 함수 호출 시 인자로 할일의 내용을 전달받음
  
  //새로운 할일생성
  const newTodo = {
    id: todos.length + 1;
    content: content, 
    completed: false

  }

  todos.push(newTodo);
  displayTodos();

}

//할일의 완료 상태를 변경하는 함수
// 주어진 id를 가진 할일의 완료 상태를 전환(토글)
function toggleTodo() {
  todos.map((todo) => {
    //순회되는 할일의 id와 배개변수로 전달받은 id가 일치한다면 해당 할일의 완료 상태를 토글시키고 새로운 객체로 반환

  if (todo.id === id){
    
  }
  });
}

//할일을 삭제하는 함수
function deleteTodo(){

}

//현재의 할일 목록을 출력하는 함수
function displayTodos(){

}
