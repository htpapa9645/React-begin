// 스타일을 객체에 작성.
// export default function App() {
//   const styles = {
//     backgroundColor: "blue",
//     color: "white",
//     fontSize: "16px",
//     padding: "10px",
//   };
//   return(
//     <>
//       <h1 style={styles}>
//         인라인 스타일
//       </h1>
//     </>
//   ); 
// }


import './App.css';
import Child from './components/Child';
import styles from './App.module.css';
import classNames from 'classnames';

// 스타일을 인라인에 직접 작성
export default function App(){
  // classnames 라이브러리 설치 및 사용
  const btnClass = classNames('btn', 'primary');
  console.log(btnClass);

  // is-active 사용
  const isActive = true;

  return(
    <>
      <h1 style={{
        backgroundColor: 'red',
        color: 'yellow',
        fontSize: '16px',
        padding: '10px',
      }}>
        인라인 스타일
      </h1>
      <button className='btn'>App Button1</button>
      <Child />
      <button className={styles.btn}>App Button2</button>
      <button className={classNames('btn', {'is-active': isActive})}>App Button3</button>
    </>
  );
}