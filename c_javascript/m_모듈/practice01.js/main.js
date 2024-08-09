export function add(x , y) {
  return x + y;
}

export default function subtract(x , y) {
  return x - y;
}

export function multiply(x , y) {
  return x * y;
}

export function divide(x , y) {
  if(y !== 0){
    return x / y;
  }else{
    console.log('0으로 나눌 수 없습니다.');
  }
}

