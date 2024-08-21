// 1. add7숫자 하나를 받아서 그 숫자에 7을 더한 값을 반환하는 함수를 작성하세요 .
function addSeven(number) {
  return "the result is " + Number(number + 7);
}
console.log(addSeven(1));

// 2. multiply2개의 숫자를 입력받아 그 곱을 반환하는 함수를 작성하세요 .
function multiplyTwo(number1, number2) {
  return "the result is " + Number(number1 * number2);
}
console.log(multiplyTwo(2, 7));

// 3. capitalize문자열을 받아서 첫 글자 만 대문자로 시작하는 문자열을 반환하는 함수를 작성하세요 . 소문자, 대문자 또는 BoTh인 문자열을 받을 수 있는지 확인하세요.
function capitalize(letters) {
  return "the result is " + letters.charAt(0).toUpperCase();
}
console.log(capitalize("capitalize this sentence"));
console.log(capitalize("CAPITALIZE THIS SENTENCE"));
console.log(capitalize("Capitalize this sentence"));

// 4. lastLetter문자열을 받아서 해당 문자열의 마지막 글자를 반환하는 함수를 작성하세요. lastLetter("abcd")돌아와야 한다"d"
function lastLetter(letters) {
  return "the result is " + letters[letters.length - 1];
}
console.log(lastLetter("abcd"));
