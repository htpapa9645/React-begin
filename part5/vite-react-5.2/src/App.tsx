import styled, { css } from "styled-components";

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ffccdd;
  color: #aabbcc;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${ (props) => 
    props.$primary &&
    css `
        background: #bf4f74;
        color: white;
    `
  }
`;

export default function App() {
    return <Button $primary>Click Me</Button>
}


// 태그드 템플릿 리터럴 사용 예..
// function tagFunction(strings, ...values) {
//   console.log(strings); // 문자열 배열
//   console.log(values); // 삽입된 표현식 값들
// }
// const name = "John";
// const age = 25;

// tagFunction`Hello, my name is ${name} and I am ${age} years old.`;
