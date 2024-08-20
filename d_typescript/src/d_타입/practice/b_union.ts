export const tmp = '';
//타입을 정의해서 사용자의 데이터를 요청하는 로직 작성

// 1. 사용자의 데이터에 대한 응답 정의 (타입 별칭)
type Success =  {
  name: string;
  email: string;
}

type Fail = {
  error: string;
}

type FetchResponce = Success | Fail;

//2.사용자의 데이터 요청에 대한 응답을 처리하는 함수 정의
function handleResponce(responce: FetchResponce) {
  //성공 또는 실패의 데이터를 처리하는 함수
  //in 연산자 : '속성' in 객체명
  // >> 해당 속성이 객체 안에 있는지의 여부를 boolean 타입으로 변환

  if('error' in responce){
    //실패(Fail)의 데이터가 전달된 경우
    console.log(responce.error);
  } else {
    console.log(`Name: ${responce.name}, Email: ${responce.email}`);
  }
}

//async--함수앞에사용 / await -- 오래걸리는 작업앞에 사용
//3.비동기 작업을 사용하여 JSONPlaceholder에서 사용자 데이터를 가져오는 함수 정의
async function FetchUserDate(userId: number) {
  //https://jsonplaceholder.typicode.com/users 사용자 10명의 데이터를 모두 가져옴
  //https://jsonplaceholder.typicode.com/users/${userId} 해당 id를 가진 사용자 한 명의 데이터를 가져옴

  try { // 에러가 발생할수도있는 거 넣기
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    //>>fetch함수 : 해당 경로를 통해 데이터를 가져와 Response 응답을 반환하는 함수

    if (!responce.ok) {
      //responce의 응답에 성공이 없다면 (실패)
      throw new Error('Network responce was not ok');
  }

  // responce 응답에서 data를 객체로 변환하여 반환
  const data = await responce.json();// jsonplaceholder의 객체 구조를 모두 가지는 데이터

  if(data.id) {
    // 성공에 대한 이름과 이메일 데이터만을 가지는 객체 생성
    const UserData: FetchResponce = {
      //좌항(userData 객체의 속성) 우항(데이터 fetch로 가져온 데이터)
      name: data.name,
      email: data.email
    }
    handleResponce(UserData);
  } else {
    //존재하지 않는 사용자인 경우
    handleResponce({error: '사용자 데이터가 정확하지 않습니다.'});
  }

  }
  catch(e) { // 캐치가 잡아줌
    // Fail 타입 >> 객체
    /*
    {
      error: 값(삼항연산자 계산, e instanceof Error ? e.message : 'Unknown Error')
    }
    */

    // A instanceof B
    // : A 데이터가 B 안에 포함되어 있는지의 여부를 확인 (상속되어 있는지 여부)
    handleResponce({ error: e instanceof Error ? e.message : 'Unknown Error' });

  }
}

FetchUserDate(1);
FetchUserDate(2);
FetchUserDate(222); // 해당url존재하지않음 에러남 하지만 에러관리가 가능한 오류
// FetchUserDate('안녕'); 숫자형 데이터에 문자형 못넣음 오류