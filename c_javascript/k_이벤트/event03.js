window.addEventListener('load', function(){
  console.log('페이지의 모든 콘텐츠가 로드되었습니다.');
});

//html dom트리가 없을 경우
//js동작방식에 오류류
window.addEventListener('DOMContentLoaded', function(){
  console.log('Dom 트리가 완성되었습니다.');
});