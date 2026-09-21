export default function App(){
  const isLogin = true;
  if(isLogin){
    return <h1>로그인 했습니다.</h1>;
  }
  return <h1>로그인해야 합니다.</h1>;
}

export function App2() {
  const isLogin = true;
  let message;
  if (isLogin) {
    message = "환영합니다... App2";
  } else {
    message = "로그인해야 합니다... App2";
  }
  return (
    <div>
      <hr style={{borderColor: 'red' }} />
      <h1>{message}</h1>
    </div>
  );
}