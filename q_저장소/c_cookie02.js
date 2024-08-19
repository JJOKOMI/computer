document.cookie = "cookie02=안녕; path=/";


function getCookieValue(cookieName) {
  let cookies = document.cookie.split(';'); // 전부 다 가져옴, split 세미콜론 기준으로 분리해서 가져옴

  let length = cookies.length;

  for(let i = 0; i < length; i++){
    let cookie = cookies[i];

    let parts = cookie.split('=');

    let name = parts[0].trim();
    if (name === cookieName) {
      return parts[1] || '';
    }
  }

  return '';
}

let username = getCookieValue('username');

console.log(username);

function deleteCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Fri, 17 May 2024 00:00:00 GMT; path=/;" // 과거 날짜 설정


}

deleteCookie('username');
