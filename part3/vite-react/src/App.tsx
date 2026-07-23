//************* 클래스 컴포넌트 예제 *************//
// import { Component } from "react";// 1. react 패키지에서 Component 클래스를 불러온다.Component는 리액트에서 제공하는 기본 컴포넌트 클래스이다.이 클래스를 상속하면 리액트 컴포넌트를 클래스 문법으로 정의할 수 있다.

// class App extends Component{ // 2. extends 키워드로 Component 클래스를 상속받는다. 이렇게 하면 App 컴포넌트는 리액트의 기본 컴포넌트 기능을 사용할수있다.
//   render(){ // 3. render() 메서드는 클래스 컴포넌트에서 꼭 필요하다. 이 메서드는 화면에 보여줄 ui 요소를 반환하는 역할을 한다. 
//     return <h1>Hello, Wooest Class Component</h1>
//   }
// }

// export default App;// 4. App 캄포넌트를 다른 파일에서 사용할 수 있도록 내보낸다.



//************* 함수형 컴포넌트 예제 *************//
export default function App(){
  return(
    <>
      <h1>Hello, Jang Min Woo, Funciton Component</h1>
    </>
  );
}
