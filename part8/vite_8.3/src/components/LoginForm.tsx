import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const changePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <form>
            <label htmlFor="uid">
                <input type='text' id='uid' placeholder="이메일을 입력하세요" value={email} onChange={changeEmail} />
            </label>
            <label htmlFor="upw">
                <input type='password' id='upw' placeholder="패스워드를 입력하세요" value={password} onChange={changePassword} />
            </label>
            <button type='submit'>로그인</button>
        </form>
    );
}