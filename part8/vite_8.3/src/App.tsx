import LoginForm from "./components/LoginForm";
import LoginForm2 from "./components/LoginForm2";
import LoginForm3 from "./components/LoginForm3";

export default function App(){
  return(
    <>
      <hr style={{borderColor: 'red'}} />
      <h1>로그인 폼 예제</h1>
      <LoginForm3 />
    </>
  );
}