import React, { useState } from "react";

export default function LoginForm2() {
    // 이메일 상태 제어
    const [email setEmail] = useState('');
    const changeEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    // 비밀번호 상태 제어
    const [password, setPassword] = useState('');
    const changePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return(
        <form>
            <label htmlFor="uid">
                <input type='text' id='uid' placeholder="이메일을 입력하세요" 
                    value={email} onChange={changeEmail}
                />
            </label>
            <label htmlFor="upw">
                <input type='text' id='upw' placeholder="비밀번호를 입력하세요" 
                    value={email} onChange={changePassword}
                />
            </label>
        </form>
    );
}