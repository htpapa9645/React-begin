//************* 클래스 컴포넌트 예제 *************//
// import { Component } from "react";// 1. react 패키지에서 Component 클래스를 불러온다.Component는 리액트에서 제공하는 기본 컴포넌트 클래스이다.이 클래스를 상속하면 리액트 컴포넌트를 클래스 문법으로 정의할 수 있다.

// class App extends Component{ // 2. extends 키워드로 Component 클래스를 상속받는다. 이렇게 하면 App 컴포넌트는 리액트의 기본 컴포넌트 기능을 사용할수있다.
//   render(){ // 3. render() 메서드는 클래스 컴포넌트에서 꼭 필요하다. 이 메서드는 화면에 보여줄 ui 요소를 반환하는 역할을 한다. 
//     return <h1>Hello, Wooest Class Component</h1>
//   }
// }

// export default App;// 4. App 캄포넌트를 다른 파일에서 사용할 수 있도록 내보낸다.



//************* 함수형 컴포넌트 예제 *************//
export default function App(){ // App 컴포넌트를 함수형 컴포넌트로 선언한다. 선언할때 export default 키워드를 사용하면 이 컴포넌트를 다른 파일에서 쉽게 불러와 사용할 수 있다.컴포넌트의 이름은 "파스칼 케이스"를 따라 작성한다.
  return( // return 문 안에는 리액트에서 사용하는 jsx문법을 작성한다. 여기서는 프래그먼트 단축 문법인 <>...</> 을 사용하여 <h1> 요소를 감싼다. 프래그먼트는 여러 요소를 감쌀 때 불필요한 html 태그를 추가하지 않고 그룹화할 수 있게 해준다.
    <>
      <h1>Hello, Jang Min Woo, Funciton Component</h1>
    </>
  );
}
