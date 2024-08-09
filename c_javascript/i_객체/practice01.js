let student = {
  name: "홍길동",
  age: 20,
  major: "컴퓨터공학",
  lectures: ["자료구조", "알고리즘", "운영체제"]
};
console.log(JSON.stringify(student));

let jsonStudent = JSON.stringify(student);
console.log(JSON.parse(student));
// console.log(student);
// console.log(JSON.parse(student));

// console.log();
// console.log(lectures[0]);
