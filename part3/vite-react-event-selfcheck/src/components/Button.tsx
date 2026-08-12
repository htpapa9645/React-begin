// 우이스트 버전
// export default function Button({onClickHandle} : {onClickHandle: () => void}){
//     return (
//         <button onClick={onClickHandle}>클릭해봐유</button>
//     );
// }

// 책 버전
export default function Button({
    children,
    handleClick,
} : {
    children: React.ReactNode,
    handleClick: () => void
}){
    return <button onClick={handleClick}>{children}</button>
}