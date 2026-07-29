export default function User(props){ // 1)
    console.log(props);              // 2)
    return <div>User Components</div> // 3)
}

/*
1) props는 부모 App 컴포넌트에서 전달한 모든 속성을 하나의 객체로 받는다.
현재 props 밑에 빨간 밑줄이 생겨 오류 표시처럼 보이겠지만. 타입을 지정하지 않아서 그러는데 일단 무시하자. 

2) 전달받은 데이터를 console.log(porps)로 콘솔에 출력한다. 

3) 화면에 <div>User Component</div> 를 랜더링한다. 

*/