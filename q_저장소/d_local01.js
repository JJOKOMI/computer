//로컬스토리지
// 웹브라우저가 제공하는 저장공간
// 사용자의 컴퓨터에 영구적으로 데이터를 저장 가능
// HTML5 웹 스토리지 사양의 일부 도입으로 쿠키의 한계를 보완한 큰 저장용량과 보안을 제공

localStorage.setItem('key', 'value');
localStorage.setItem('key', 'value');
localStorage.setItem('userAge', 50);
localStorage.setItem('isStudent', false);

let userInfo = {
  name: '황현징',
  age: 50
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

let storeData=localStorage.getItem('userInfo');
let userInfoValue = JSON.parse

// localStorage.clear(); //모두삭제