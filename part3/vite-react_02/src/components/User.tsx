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
// export default function User( 
//     props: { 
//                 userObj: { name: string,  age: number, },
//                 clickHandler: () => void,
//     }
// ){
//     return(
//         <>
//             <p>name : { props.userObj.name }</p>
//             <p>age : { props.userObj.age }</p>
//             <button onClick={ props.clickHandler }>클랙했슈</button>
//         </>
//     );
// }

// 부모컴포넌트로 내려받은 props를 구조 분해 할당
// export default function User(
//                                 { userObj, clickHandler } : { 
//                                     userObj: { name: string, age: number,},
//                                     clickHandler: () => void,
//                                 }

// ){
//     return (
//         <>
//             <p>name: { userObj.name }</p>
//             <p>age: { userObj.age }</p>
//             <button onClick={ clickHandler } >구조분해할당 클릭</button>
//         </>
//     );
// }


// 부모컴포넌트로 내려받은 props안의 userObj까지 구조 분해 할당
// export default function User(
//                                 { userObj : { name, age }, clickHandler } : {
//                                     userObj: { name: string, age: number },
//                                     clickHandler: () => void
//                                 }
// ){
//     return(
//         <>
//             <p>{ name }</p>
//             <p>{ age }</p>
//             <button onClick={ clickHandler }>완전구조분해할당</button>
//         </>
//     );
// }

// 함수 내부에서의 구조 분해 할당..
// export default function User(
//                                 props: {
//                                     userObj: { name:string, age: number },
//                                     clickHandler: () => void,
//                                 }
// ){
//     const {
//             userObj: { name, age },
//             clickHandler
//     } = props;

//     return (
//         <>
//             <p>name : { name }</p>
//             <p>age : { age }</p>
//             <button onClick={ clickHandler }>함수내부에서 구조분해 할당 1</button>
//         </>
//     );
// }

// interface 타입정의
// interface UserProps {
//     userObj: { name: string, age: number },
//     clickHandler: () => void
// }

// export default function User(props: UserProps){
//     const {
//         userObj: { name, age },
//         clickHandler,
//     } = props;
//     return(
//         <>
//             <p>name: { name }</p>
//             <p>age: { age }</p>
//             <button onClick={ clickHandler }>interface타입정의</button>
//         </>
//     );
// }

// src/props.d.ts 파일에 UserProps를 별도 정의한 후 사용
export default function User(
                                props: UserProps
){
    const {
        userObj: { name, age },
        clickHandler
    } = props;
    return (
        <>
            <p>name : { name }</p>
            <p>age : { age }</p>
            <button onClick={ clickHandler }>타입 별도 정의후</button>
        </>
    );
}