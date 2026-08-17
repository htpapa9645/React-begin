import { useState } from 'react';

export default function App(){
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count => count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>누르면 증가하는 버튼</button>
    </div>
  );
}