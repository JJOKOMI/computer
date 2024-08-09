export class TodoManager {
  // todoManager 생성자
  constructor(){
    //TodoManager 호출 시 해당 클래스의 인스턴스에 todos 속성이 생성
    this.todos = [];
  }

  // 1) 새로운 할 일 항목 추가
  addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    this.todos.push(newTodo);
  }

  // 2) 특정 할 일 항목의 완료 상태를 토글
  toggleCompleted(id) {
    const todo = this.todos.find(todo => todo.id === id);

    if(todo) {
      todo.completed = !todo.completed;

    }
  }
  // 3) 특정 할 일 항목을 제거
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // 4) 모든 할 일 항목을 반환
  getTodos(){
    return this.todos;
  }
  

}