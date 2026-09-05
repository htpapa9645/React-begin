// import styled, { css } from "styled-components";

// const Button = styled.button<{ $primary?: boolean }>`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #ffccdd;
//   color: #aabbcc;
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   ${ (props) => 
//     props.$primary &&
//     css `
//         background: #bf4f74;
//         color: white;
//     `
//   }
// `;

// export default function App() {
//     return <Button $primary>Click Me</Button>
// }


// 태그드 템플릿 리터럴 사용 예..
// function tagFunction(strings, ...values) {
//   console.log(strings); // 문자열 배열
//   console.log(values); // 삽입된 표현식 값들
// }
// const name = "John";
// const age = 25;

// tagFunction`Hello, my name is ${name} and I am ${age} years old.`;


// emotion 라이브러리 기본 사용법
// import { css } from '@emotion/css';

// export default function App() {
//     return (
//         <button
//             className={css`
//                 background: transparent;
//                 border-radius: 3px;
//                 border: 2px solid #bf4f74;
//                 color: #bf4f74;
//                 margin: 0 1em;
//                 padding: 0.25em 1em;
//             `}
//         >클릭버튼이유~~</button>
//     );
// }


// emotion 라이브러리 기본 사용법 > 동적 스타일...
// import { css } from '@emotion/css';

// export default function App() {
//     const isActive = true;
//     return (
//         <button
//             className={css`
//                 background: ${ isActive? 'blue' : 'transparent' };
//                 border-radius: 3px;
//                 border: 2px solid #bf4f74;
//                 color: ${ isActive? 'white' : '#bf4f74' };
//                 margin: 0 1em;
//                 padding: 0.25em 1em;
//             `}
//         >클릭버튼이유~~</button>
//     );
// }


// @vanilla-extract/css 사용
// import { container, button } from "./App.css.ts";

// export default function App(){
//     return(
//         <div className={container}>
//             <button className={button}>클릭?</button>
//         </div>
//     );
// }


// @vanilla-extract/css 사용 > 동적 스타일
import { container, button, active } from "./App.css.ts";

export default function App(){
    const isActive = true;
    return(
        <div className={container}>
            <button className={`${button} ${isActive && active}`}>클릭?</button>
        </div>
    );
}