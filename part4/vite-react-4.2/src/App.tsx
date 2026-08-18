import { useState } from 'react';

// export default function App(){
//   const [count, setCount] = useState(0);
//   const clickHandler = () => setCount(count => count + 1);
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={clickHandler}>누르면 증가하는 버튼</button>
//     </div>
//   );
// }

// export default function App() {
//   // const [name, setName] = useState(null);
//   // const [age, setAge] = useState(null);
//   // const [gender, setGender] = useState(null);
//   const [name, setName] = useState<string | null>(null);
//   const [age, setAge] = useState<number | null>(null);
//   const [gender, setGender] = useState<string | null>(null);

//   const clickHandler = () => {
//     setName("jangminwoo"); // 타입오류 발생
//     setAge(42); // 타입오류 발생
//     setGender("male"); // 타입오류 발생
//   };
//   return (
//     <div>
//       <p>이름: {name}</p>
//       <p>나이: {age}</p>
//       <p>성별: {gender}</p>
//       <button onClick={clickHandler}>변경</button>
//     </div>
//   );
// }


// export default function App() {
//   const clickHandler = () => {
//     const [count, setCount] = useState(0); // 오류 발생
//     setCount(count + 1);
//   };
//   return <button onClick={clickHandler}>클릭</button>;
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const clickHandler = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={clickHandler}>증가</button>
//     </div>
//   );
// }

export default function App(){
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    };
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={clickHandler}>증가요</button>
        </div>
    );
  };