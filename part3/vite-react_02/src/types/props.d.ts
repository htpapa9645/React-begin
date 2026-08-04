// interface UserProps {
//     userObj: { name: string, age: number },
//     clickHandler: () => void
// }

// interface 대신 type을 사용해도 된다. **타입 별칭** 이라한다.
// type UserProps = {
//     userObj: { name: string, age: number },
//     clickHandler: () => void
// }

// 전개연산자 (스프레드 연산자) 사용시 userObj 객체의 속성이 분리되어 전달되므로 아래와 같이 수정
// interface UserProps {
//     name: string,
//     age: number,
//     clickHandler: () => void
// }

// 전개연산자 (스프레드 연산자) 사용시 userObj 객체의 속성이 분리되어 전달되므로 아래와 같이 수정
// type 키워드 사용
// type UserProps = {
//     name: string,
//     age: number,
//     clickHandler: () => void,
// }