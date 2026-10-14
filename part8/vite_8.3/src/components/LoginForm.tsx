import { useState } from "react";
import { useRef } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    const changeEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const changePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 기본 동작 막기
        if(email.trim() === ''){ // email 값이 공백이거나 빈 문자열이면 
            alert('이메일을 입력하세요'); // 경고창을 띄우거나
            idRef.current?.focus();
            return; // 함수실행 종료
        }
        if(password.trim() === ''){ // password 값이 공백이거나 빈 문자열이면 
            alert('비밀번호를 입력하세요'); // 경고창을 띄우거나
            pwRef.current?.focus();
            return; // 함수실행 종료
        }

        alert(`이메일 : ${email}, 비밀번호 : ${password}`);
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="uid">
                <input type='text' id='uid' placeholder="이메일을 입력하세요" 
                value={email} 
                onChange={changeEmail} 
                ref={idRef}
                />
            </label>
            <label htmlFor="upw">
                <input type='password' id='upw' placeholder="패스워드를 입력하세요" 
                value={password} 
                onChange={changePassword} 
                ref={pwRef}
                />
            </label>
            <button type='submit'>로그인</button>
        </form>
    );
}