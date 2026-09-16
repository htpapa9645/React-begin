export default function App(){
  const isLogin = true;
  if(isLogin){
    return <h1>로그인 했습니다.</h1>;
  }
  return <h1>로그인해야 합니다.</h1>;
}