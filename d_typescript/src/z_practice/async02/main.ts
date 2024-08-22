/*
  외부 api를 사용하는 비동기 작업 프로젝트
  - jsonplaceholder의 photos 데이터를 사용
  https://jsonplaceholder.typicode.com/photos

  url을 통한 데이터 요청시
  >> url경로?키=쌍의 형태로 옵션 전달 가능 ex)?albumId=1
  https://jsonplaceholder.typicode.com/photos?albumId=1

  요구사항 정리
  - 각 페이지에 photos 데이터의 사진을 4개씩 첨부
    (50 === (4 * 12) + 2)
  - 각 사진의 이름(title)은 사진 아래 작성
  - 페이지 간의 이동은 버튼(Previous, Next)으로 이동
  - async/await를 사용하여 작성

*/

// photo 타입 정의
type Photo = {
  albumId: number;
  id: number;
  title: number;
  url: string;
  thumbnailUrl: string;
}

//현재 페이지 번호를 추적하는 변수 선언(1로 초기화)
let currentPage = 1;
// 한 페이지에 표시할 사진의 수
const photoPerPage = 4;

//지정된 페이지의 사진들을 비동기적으로 불러오는 함수 선언
async function fetchPhotos(page: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
    if (!response.ok) {
      throw new Error('데이터를 가져오지 못했습니다.');
    }

    const photos: Photo[] = await response.json();

    //splice (시작인덱스, 끝인덱스)
    // : 배열 메서드, 특정 부분을 새로운 배열로 반환
    // 시작 인덱스 <= x < 끝 인덱스

    // (page - 1) * photoPerPage, page * photoPerPage(4의배수)
    // : 현재 페이지의 첫번째 사진 인덱스 계산
    // >> 페이지 번호는 1부터 시작
    // >> 인덱스 번호는 0부터 시작
    // : 페이지번호에 -1을 한 번호에 페이지 당 사진 수를 곱한다.
    // : 현재 페이지의 첫번째 사진이 배열에서 몇 번째 위치하는지 계산

    const renderPhotos: Photo[] = photos.slice((page - 1) * photoPerPage, page * photoPerPage);
    return renderPhotos;

  } catch (error) {
    console.log('Failed');
    return [];
  }
}

// 사진을 페이지에 렌더링하는 함수
function renderPhotos(photos: Photo[]) {
  //사진을 표시할
  const container = document.getElementById('photo-container') as HTMLElement;

  container.innerHTML = '';

  // 각 사진에 대한 HTML 요소 생성
  photos.forEach(photo => {
    const photoElement = document.createElement('div');
    photoElement.className = 'photo-item';
    photoElement.innerHTML = `
    <img src = '${photo.thumbnailUrl}' alt='${photo.title}' />
    <p>${photo.title}</p>
    `; // 오류나면 alt에 있는거 넘겨줌

    container.appendChild(photoElement)
  });
}
//버튼 이벤트 등록
document.getElementById('prev-button')!.addEventListener('click', () => {
  if(currentPage > 1) {
    currentPage--;
    updatePhotos();

  }
})

document.getElementById('next-button')!.addEventListener('click', () => {
    currentPage++;
    updatePhotos();
})

// 전체 프로젝트 실행 (사진 불러오기)
async function updatePhotos() {
  const photos = await fetchPhotos(currentPage);

  renderPhotos(photos);
}

updatePhotos();