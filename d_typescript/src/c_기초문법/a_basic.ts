// let num = 10;
// :helloWorld.ts 파일의 변수와 충돌
//타입스크립트는 파일 단위의 스코프가 생성되지 x
//프로젝트 전체 범위의 스코프가 전역 스코프

//중괄호 사용법 : 직관적인 스코프를 생성해줌
{
  let num = 10;
}

{
  let num = 5;
}

// export 키워드 사용법
// :export 키워드를 사용하는 경우 ts파일이 자동 모듈로 인식
//외부의 전역 스코프와 충돌을 방지

//tmp : temporary --일시적인, 임시의
export const tmp = "";

let num = 1; // 충돌안남
console.log(num);

let message = "hello";
console.log(message.toUpperCase());

// message(); -- error

//컨트롤 k f :포맷터 진행
