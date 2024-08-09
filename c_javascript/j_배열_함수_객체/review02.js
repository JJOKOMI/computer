//장바구니 시스템 기능 정리
// 추가, 조회, 수정, 삭제 - crud
//상품의 고유 식별자 id = number, 상품 이름 name = string, 상품의 가격 price=number, 상품의 수량 quantity = number

let product = {
  id: 1,
  name: 'banana',
  price: 1.5,
  quantity: 2
}

let cart = [];

// 상품 추가 함수
function addToCart(id, name, price, quantity){
// 1. 장바구니 내에 해당 상품이 있는지 검색(findIndex : 배열 내의 동일한 요소가 있는지 찾고 index를 반환, 없으면 -1 반환)
  const index = cart.findIndex(item => item.id === id);

  // 상품이 이미 장바구니에 있을 경우
  if (index > -1) {
    cart[index].quantity += quantity; // 해당 상품의 수량을 업데이트

  } else { // 상품이 장바구니에 없을 경우
    cart.push({id, name, price, quantity}); // 새 상품을 장바구니에 추가
  }

}
