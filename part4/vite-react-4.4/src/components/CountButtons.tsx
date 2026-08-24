// 상태끌어올리기 예제 실습 - 잘못된 예
// import { useState } from 'react';

// export default function CountButtons(){
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     const reset = () => setCount(0);
//     return (
//         <>
//             <button onClick={decrement}>감소</button>
//             <button onClick={reset}>초기화</button>
//             <button onClick={increment}>증가</button>
//         </>
//     );
// }

export default function CountButtons({
    increment, decrement, reset
} : { 
    increment : () => void, decrement : () => void, reset : () => void,
}){
    return (
        <>
            <button onClick={decrement}>감소</button>
            <button onClick={reset}>초기화</button>
            <button onClick={increment}>증가</button>
        </>
    );
}