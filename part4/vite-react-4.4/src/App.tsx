// 상태전달하기 초기
// import { useState } from 'react';
// import Count from './components/Count';

// export default function App(){
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <Count count={count} setCount={setCount} />
//         </>
//     );
// }

// 상태 변경 함수를 자식 컴포넌트에 직접 전달하는 대신, 
// 부모 컴포넌트에서 별도로 함수를 정의해 전달할 수도 있다.
import { useState } from 'react';
import Count from './components/Count';

export default function App(){
    const [count, setCount] = useState(0);
    const increment = () => setCount((count) => count + 1);
    return (
        <>
            <Count count={count} increment={increment} />
        </>
    );
}