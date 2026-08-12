import Button from "./components/Button";

// 우이스트 버전
// export default function App(){
//   const onClickHandle = ({msg} : {msg: string}) => {
//     alert(msg);
//   };
//   return(
//     <>
//       <Button onClickHandle={() => { onClickHandle({msg: '클릭됐슈'})}} />
//     </>
//   );
// }

// 책 버전
export default function App(){
    return(
        <>
            <Button handleClick={() => alert('login')}>login</Button>
            <Button handleClick={() => alert('logout')}>logout</Button>
        </>
    );
}