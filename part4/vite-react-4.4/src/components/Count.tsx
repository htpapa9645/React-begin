// 상태전달하기 초기

// 부모에서 props 를 내려받았는데 타입을 지정하지 않았을때, 부모컴포넌트에서 타입관련오류발생함
// export default function Count(){
//     return <div>count</div>
// }

// import type { Dispatch, SetStateAction } from "react";

// export default function Count({
//     count, setCount
// } : { count: number, setCount: Dispatch<SetStateAction<number>>; }) {
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount((count) => count + 1)}>증가</button>    
//         </div>
//     );
// }

// 상태 변경 함수를 자식 컴포넌트에 직접 전달하는 대신, 
// 부모 컴포넌트에서 별도로 함수를 정의해 전달할 수도 있다.
export default function Count({
    count, increment
} : { count: number, increment: () => void }) {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>증가</button>    
        </div>
    );
}