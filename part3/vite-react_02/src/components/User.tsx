// 자바스크립트 예, 아래 props 빨간줄 표시가 발생...!

// export default function User(props){ // 1)
//     console.log(props);              // 2)
//     return <div>User Components</div> // 3)
// }

/*
1) props는 부모 App 컴포넌트에서 전달한 모든 속성을 하나의 객체로 받는다.
현재 props 밑에 빨간 밑줄이 생겨 오류 표시처럼 보이겠지만. 타입을 지정하지 않아서 그러는데 일단 무시하자. 

2) 전달받은 데이터를 console.log(porps)로 콘솔에 출력한다. 

3) 화면에 <div>User Component</div> 를 랜더링한다. 

*/



// 타입스크립트 예) 부모컴포넌트에서 <User name="철수" age={20} /> 이렇게 전달했을때..
// export default function User(props: { name: string; age: number }){ // 1)
//     return ( // 2)
//         <>
//             <p>name: { props.name }</p>
//             <p>age: { props.age }</p>
//         </>
//     );
// }


// 타입스크립트 예) 부모컴포넌트에서 <User userObj={userObj} /> 이렇게 전달했을때..
export default function User( 
    props: { 
                userObj: { name: string,  age: number, },
                clickHandler: () => void,
    }
){
    return(
        <>
            <p>name : { props.userObj.name }</p>
            <p>age : { props.userObj.age }</p>
            <button onClick={ props.clickHandler }>클랙했슈</button>
        </>
    );
}