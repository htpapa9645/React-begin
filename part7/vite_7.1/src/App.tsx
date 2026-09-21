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
      <h1>App2</h1>
      <h1>{message}</h1>
    </div>
  );
}

import Logout from "./components/Logout";
export function App3() {
  const isLogin = false;
  let message;
  if (isLogin) {
    message = <h1>환영합니다</h1>;
  } else {
    message = <Logout />;
  }
  return <>
          <hr style={{borderColor: 'red' }} />
          <h1>App3</h1>
          {message}
         </>;
}

export function App4() {
  const isLogin = true;
  return (
    <div>
      <hr style={{borderColor: 'red' }} />
      <h1>App4</h1>
      <h1>{isLogin ? '환영합니다!' : '로그인해야 합니다.'}</h1>
    </div>
  );
}

export function App5(){
  const isLogin = true;
  return (
    <div>
      <hr style={{borderColor: 'red' }} />
      <h1>App5</h1>
      {
        isLogin ? <h1 style={{color:'blue'}}>환영한다.</h1>
                :
                <h1 style={{color: 'red'}}>로그인해야 한다.</h1>
      }
    </div>          
  );
}

import Login from "./components/Login";

export function App6(){
  const isLogin = true;
  return (
    <div>
      <hr style={{borderColor: 'red' }} />
      <h1>App6</h1>
      {isLogin ? <Login /> : <Logout />}
    </div>
  );
}

export function App7(){
  const isLogin = true;
  const message = isLogin ? (
    <>
      <h1>환영한다.</h1>
      <h2>오늘 기분은 어떠니?</h2>
    </>
  ) : (
    <>
      <h1>환영 못 한다.</h1>
      <h2>오늘 기분이 안 좋다.</h2>
    </>
  );
  return (
    <div>
      <hr style={{borderColor: 'red' }} />
      <h1>App7</h1>
      <div>
      {message}
      </div>
    </div>
  );
}

export function App8(){
  const isLogin = true;
  const message = isLogin ? <Login /> : <Logout />;
  return (
     <div>
      <hr style={{borderColor: 'red' }} />
      <h1>App8</h1>
      <div>
      {message}
      </div>
    </div>
  );
}

export function App9(){
  const isActive = true;
  return (
     <div>
      <hr style={{borderColor: 'red' }} />
      <h1>App9</h1>
      <div 
      style={{
        fontSize : isActive ? '1rem' : '2rem',
        fontWeight : isActive ? 'bold' : 'normal',
        color : 'blue',
      }}>
      동적으로 스타일 적용하기</div>
    </div>
  );
}
