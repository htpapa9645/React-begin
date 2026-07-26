//************* 클래스 컴포넌트 예제 *************//
// import { Component } from "react";// 1) 

// class App extends Component{ // 2) 
//   render(){ // 3) 
//     return <h1>Hello, Wooest Class Component</h1>
//   }
// }

// export default App;// 4. App 캄포넌트를 다른 파일에서 사용할 수 있도록 내보낸다.

/*
  1) react 패키지에서 Component 클래스를 불러온다.
    Component는 리액트에서 제공하는 기본 컴포넌트 클래스이다.
    이 클래스를 상속하면 리액트 컴포넌트를 클래스 문법으로 정의할 수 있다.

  2) extends 키워드로 Component 클래스를 상속받는다. 
    이렇게 하면 App 컴포넌트는 리액트의 기본 컴포넌트 기능을 사용할수있다.

  3) render() 메서드는 클래스 컴포넌트에서 꼭 필요하다. 
     이 메서드는 화면에 보여줄 ui 요소를 반환하는 역할을 한다.    
*/



//************* 함수형 컴포넌트 예제 *************//
// export default function App(){ // 1) 
//   return( // 2) 
//     <>
//       <h1>Hello, Jang Min Woo, Funciton Component</h1>
//     </>
//   );
// }

/*
  1) App 컴포넌트를 함수형 컴포넌트로 선언한다. 
    선언할때 export default 키워드를 사용하면 이 컴포넌트를 다른 파일에서 쉽게 불러와 사용할 수 있다.
    컴포넌트의 이름은 "파스칼 케이스"를 따라 작성한다.
  
  2) return 문 안에는 리액트에서 사용하는 jsx문법을 작성한다. 
    여기서는 프래그먼트 단축 문법인 <>...</> 을 사용하여 <h1> 요소를 감싼다. 
    프래그먼트는 여러 요소를 감쌀 때 불필요한 html 태그를 추가하지 않고 그룹화할 수 있게 해준다.  

 */



//************* 컴포넌트 추가 *************//
function Header() { // 1) 
  return (
    <>
      <h1>Header</h1>
    </>
  );
}

function Main(){ // 3)
  return(
    <>
      <h1>Hello, Function Component, This is MAIN</h1>
    </>
  );
}

function Footer(){ // 4)
  return(
    <>
      <h1>Footer</h1>
    </>
  );
}

export default function App(){
  return(
    <>
      <Header /> {/* 2) */}
      <Main /> {/* 5) */}
      <Footer /> {/* 6) */}
    </>
  );
}

/*
  1) Header라는 함수형 컴포넌트를 정의하고 return 문 안에 jsx를 작성해 화면에 표시할 내용구성.
  2) App 컴포넌트 내부에서 Header 컴포넌트를 html태그처럼 <Header /> 형태로 사용한다.
  3) Main 컴포넌트 반환
  4) Footer 컴포넌트 반환
  5) App 컴포넌트에서 <Main /> 을 사용하면 Main 컴포넌트가 실행되어 jsx가 반환된다.
  6) <Footer /> 도 같은 방식으로 실행되어 jsx가 화면에 랜더링 된다.
*/