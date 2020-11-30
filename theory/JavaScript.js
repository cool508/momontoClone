//  JS 이론
// : JS는 이벤트에 반응 할 수 있도록 만든 것
// 한줄 주석
/* 여러 줄 주석 */

/* Variable(변수) */ 
// 변수는 바뀔 수 있다.
let variableName = 0; //  let는 값을 바꿀 수 있다, 진짜 필요할 때는 let 사용
const variableName = 0; // const는  값을 바꿀 수 없다, const 기본으로 사용
var variableName = 0 ;  // 변수, let 과 비슷

/* DataType(데이터 타입 종류) */
// String
const variableName = "텍스트 또는 123456"; // ""안에  숫자가 들어가도 문자열 취급
// boolean
const variableName = true; // True,False 논리값  0,1 과 같다
// Number
const variableName = 123;
// Float
const variableName = 12.3;
 
/* Array(배열) */
// [] : 데이터 값을 정렬 할 때 사용
// camelCase - 변수명에 띄어쓰기가 필요 할 때 사용
const something = "Something";
const arrayName = ["value1","value2","value3","value4","value5","value6","value7",true,54,something];
console.log(arrayName); 
console.log(arrayName[2]);

/* Object(객체) */
// {} : 데이터 값을 정렬 할 때 사용, value(값)에 이름을 줄 수 있다.
const peopleInfo = {
  name : "JB",
  age : "24",
  gender : "Male",
  isHandsome : true,
  favMovies : ["a","b","c","d","e"], // 객체 안의 배열
  favFood : [ // 객체 안의 객체 배열
    { 
      name : "A",
      fatty:false 
    },
    {
      name : "B",
      fatty:true 
    } 
  ]
}
console.log(peopleInfo.gender); // Male
peopleInfo.gender = "Female";
console.log(peopleInfo.gender); // Female
console.log(peopleInfo);

/* Function(함수) */
// 함수는 ()안에 매개변수(parameter)/ 인자(argument)을 이용하여 외부에 있는 데이터를 함수에게 전달 
// `` 백틱을 사용하자 
function functionName (params, arg) {
  return `매개변수 ${params}, 인자 ${arg}`;
} // return 반환값을 준다.
const valueName = functionName(A,B);
console.log(valueName);
// 예시
const calculator = {
  plus: function(a,b) {
    return a + b;
  },  
  minus: function(a,b) {
    return a - b;
  },
  multi: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  },
  power: function(a,b) {
    return a ** b;
  },
}
const plus   = calculator.plus(5,5) 
const minus  = calculator.minus(5,5) 
const multi  = calculator.multi(5,5) 
const divide = calculator.divide(5,5) 
const power  = calculator.power(5,5) 
console.log(plus,minus,multi,divide,power);

/* DOM */
// 자바스크립트 -> HTML 모든 요소 가지고 객체로 변환
const variableName = document.querySelector("#id / .class ")
// JS로 HTML노드 선택?

/* 이벤트 */
// 웹에서 발생하는 것들
// addEventListener -> 이벤트 발생 시 동작 연결
const variableName = document.querySelector("#id / .class ")

function functionName(params) {
  console.log("함수 동작");  
}
variableName.addEventListener("event",functionName); // event : onclick등등 , 이벤트 발생 시 호출
variableName.addEventListener("event",functionName()); // event : onclick등등 , 즉시 함수 호출

/* if-else문 */
// condition  -> T / F  으로 block을 실행  
if (condition) {
  block1
} else if(condition2) {
  block2
} else {
  block3
}
/* ===, &&, || */
A && B // A, B 모두 T => true
A || B // A or B 가 T => true

/* ClassList */
classList /* 클래스를 리스트 형태로 관리, 클래스를 추가 제거할 때 className 대신 사용 하기 */
/* Function */
contains()// ()안의 값을 체크 -> 값이 있으면 T 없으면 F 반환
toggle() // () 안의 값을 체크 -> 값이 있으면 remove, 없으면 add
setInterval() // (arg1, arg2) -> arg1 : 실행할 함수, arg2 : 실행할 간격 ms 단위
createElement() // ()안의 요소를 생성한다.
appendChild() // () 안의 값을 부모 요소안에 넣는다.
array.forEach(element => { }); // array에 있는 것을 한번 씩 실행시켜줌
array.filter() // 배열안의 값들에 ()을 실행하여 T인 것들 만 모아 새로운 배열을 만듬  
Math.floor()// () 안의 값 소수점 이하 버림
Math.ceil()// () 안의 값 소수점 이하 올림
then() // 데이터를 다 로딩하면 () 안의 함수를 불러냄
/* 삼항연산자 */
// 작은 조건문  
A ? B : C  // A 면 B 를 실행 아니면 C 실행

/* localStorage */
// 브라우저에 JS 정보를 저장하는 작은 공간
// localStorage는 JS의 데이터를 저장 할 수 없다. String만 저장가능

/* JSON (JavaScript Object Notation) : 데이터 전달시 JS가 다룰 수 있도록 object로 바꿔줌*/
JSON.stringify() // ()안의 object 를 string으로 바꿔줌
JSON.JSON.parse() // ()안의 string 를 object로 바꿔줌
