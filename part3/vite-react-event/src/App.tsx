// import Button from "./components/Button";

// export default function App(){
//   return(
//     <>
//       <Button onFive={ () => { alert('onFive'); } } />
//     </>
//   );
// }


// 이벤트 핸들러 > 인라인 핸들러
// export default function App() {
//   return (
//     <>
//       <button
//         onClick={() => {
//           alert("Button clicked");
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }


// 이벤트 핸들러 > 함수참조 핸들러
// export default function App() {
//   const clickHandler = () => {
//     alert("Button clicked");
//   };
//   return (
//     <>
//       {/* <button onClick={clickHandler}>click</button> */}
//       <button onClick={clickHandler()}>click</button> {/* 잘못작성된 예 함수가 바로 실행된다. */}
//     </>
//   );
// }

// 함수참조 방식으로는 매개변수를 전달할수없다 > 문제점 예
// export default function App(){
//   const clickHandler = (msg: string) => {
//     alert(msg);
//   };
//   return(
//     <>
//       <button onClick={() => { clickHandler('hello'); }}>click</button>
//     </>
//   );
// }


// 이벤트 객체 > 이벤트 객체와 인라인 핸들러
// export default function App() {
//   return (
//     <>
//       <button
//         onClick={(e) => {
//           console.log(e);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }

// 이벤트 객체와 함수 참조
// export default function App(){
//   const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     console.log(e);
//   };
//   return(
//     <>
//       <button onClick={clickHandler}>click</button>
//     </>
//   );
// }


// 이벤트 객체 > 타입 추론 ... e 에 마우스를 올리면 자동으로 이벤트 객체의 타입을 추론해 보여준다.
// export default function App(){
//   return(
//     <>
//       <button onClick={ (e) => console.log(e) }>click</button>
//     </>
//   );
// }


// 이벤트 객체와 매개변수
// export default function App(){
//   const clickHandler = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent> ,
//     msg: string,
//   ) => {
//     console.log(e);
//     alert(msg);
//   };
//   return(
//     <>
//       <button onClick={(e) => clickHandler(e, 'hello')}>click</button>
//     </>
//   );
// }


// 이벤트 전파 > 캡쳐링 > 부모에서 자식요소로 이벤트 전파
export default function App() {
  const handleCapture = () => {
    console.log("Parent");
  };
  const handleBubble = () => {
    console.log("Child");
  };
  return (
    <div
      onClickCapture={handleCapture}
      style={{ padding: "50px", backgroundColor: "#f8f8f8" }}
    >
      Parent
      <button onClick={handleBubble} style={{ marginTop: "20px" }}>
        Click Me
      </button>
    </div>
  );
}