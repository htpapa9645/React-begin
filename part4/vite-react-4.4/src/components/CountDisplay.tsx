// 상태끌어올리기 예제 실습 - 잘못된 예
// import { useState } from 'react';

// export default function CountDisplay(){
//     const [count] = useState(0);
//     return <h1>Count : {count}</h1>
// }

// 상태끌어올리기 예제 실습 - 올바른 예
export default function CountDisplay({ count } : { count: number}){
    return <h1>Count : {count}</h1>;
}