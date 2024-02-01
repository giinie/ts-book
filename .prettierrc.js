// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {{endOfLine: string, singleQuote: boolean, printWidth: number, trailingComma: string, semi: boolean, tabWidth: number, arrowParens: string}} */
const config = {
  singleQuote: true,
  // 문자열은 singleQuote로 ("" -> ''), default: false

  // 이하 설정은 모두 default 값이지만 명시적으로 표기하기 위해 적음
  semi: true,
  //코드 마지막에 세미콜론이 있게 formatting
  tabWidth: 2,
  // 들여쓰기 너비는 2칸
  trailingComma: 'all',
  // 배열 키:값 뒤에 항상 콤마를 붙이도록 formatting
  printWidth: 80,
  // 코드 한줄이 maximum 80칸
  arrowParens: 'always',
  // 화살표 함수가 매개변수를 받을 때 항상 괄호를 붙이도록 formatting
  endOfLine: 'lf',
  // windows에 뜨는 'Delete cr' 에러 해결
};

module.exports = config;
