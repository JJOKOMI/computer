export const tmp = '';

// 제네릭 함수 구현
function reverseArray<T>(array: T[]): T[] { 
  // 배열 메서드 : reverse()
  // >> [1,2,3].reverse() === [3,2,1]

  let reverseArr = array.reverse();
  return reverseArr;
}

let stringArr = reverseArray(['1','2','3']);
let booleanArr = reverseArray([true, false, false, false]);
let numberArr = reverseArray([1, 2, 3]);

console.log(stringArr);
console.log(booleanArr);
console.log(numberArr);

// 제네릭 인터페이스 정의

interface KeyValue<K, V> {
  key: K,
  value: V
}

let keyValue: KeyValue<string, number> => {
  key: '황현디',
  value: 123
}