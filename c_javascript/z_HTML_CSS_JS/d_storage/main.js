let todos = [];

document.addEventListener('DOMContentLoaded', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || []; // 널값에 대한 조건식활용

})

function addTodo() {

}

function renderTodos(todos) {
  
}