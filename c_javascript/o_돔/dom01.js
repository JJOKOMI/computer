//! Dom

//문서 객체 : html안에서 요소로 불리는 객체를 js에서는 문서 객체라고 불림

//dom정의 : 웹페이지를 문서 객체로 조작하고 관리할 수 있는 인터페이스

//dom 사용법 : js에서 dom에 접근하는 경우 요소를 선택, 추가, 수정, 삭제하는 메서드와 속성에 접근이 가능하다. >> crud

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('h1');

  header.textContent = 'HEADER ONE';
  header.style.color = 'white';
  header.style.borderColor = 'black';
  header.style.padding = '10px';

});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('li');

  items.forEach(item => {
    item.textContent = 'LIST ITEM';
    item.style.color = 'pink';
    item.style.listStyle = 'none';
    item.style.backgroundColor = 'black';
  })
});
document.addEventListener('DOMContentLoaded', () => {
  const example = document.getElementById-
})