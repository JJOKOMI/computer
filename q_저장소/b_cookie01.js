//쿠키 : 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일

//쿠키의 구조
//이름: 각 쿠키를 식별하는 고유한 이름
//값: 각 쿠키에 저장하는 정보의 문자열
//만료날짜: 쿠키의 수명
//그외: 경로, 도메인, Secure플래그, HttpOnly플래그

//쿠키의 한계
//용량제한이 있다. (4kb), 보안에 취약(개인 정보 보호 문제)

//쿠키 생성 및 수정
//쿠키 생성 : document.cookie 속성
//: 웹브라우저에 쿠키를 생성하고 관리 (쿠키 설정, 읽기, 수정, 삭제)

document.cookie = "username = lsa; path=/;"

//만료 날짜 : expires 속성 설정
//만료날짜를 설정하지 않는 경우 세션 쿠키로 자동 설정되어 브라우저가 닫힐때 자동 삭제가 됨
//만료 날짜
let date = new Date();

date.setTime(date.getTime() + (1 * 60 * 60 * 1000));

let expires = "expires=" + date.toUTCString();

document.cookie = "userAge=50;" + expires + "; path=/;"

let date2 = new Date();
date2.setTime(date2.getTime() + (24 * 60 * 60 * 1000));

let expires2 = "expires=" + date2.toUTCString();

document.cookie = "oneDay = 하루;" + expires2 + "; path=/;"