export const tmp = '';

//타입스크립트 TODO 리스트 구현

// 요구사항 (기능정리)
// - Todo (할일, 객체) 항목의 인터페이스 정의 (ITodoItem)
// : id(number), task(string), completed(boolean)
// >> 각각의 할일을 todos 배열로 관리

// 할일 리스트를 관리 할 수 있는 함수 구현
// 1. addTodo: 새로운 할일을 추가
// 2. completdeTodo: Todo 항목의 completed 상태를 true로 변경
// 3. deleteTodo: Todo 항목을 삭제

// >> 각 함수는 Todo 항목 배열(todos)을 입력받고, 변경된 배열을 반환

//할 일 객체의 인터페이스 명시
interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

//할 일 목록(리스트) 타임 : ITodoItem[] 
function addTodo() {
  const newTodo: ITodoItem = {
    id: Math.max(),
    task: task,

  }
}

function completdeTodo() {

} 
//...todos == todos에 있는 요소 다 가지고옴

function deleteTodo() {

}
