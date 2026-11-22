import { useRef, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState(''); // 이메일 입력 값을 저장할 상태
    const emailRef = useRef<HTMLInputElement>(null); // 이메일 요소를 가리킬 ref 객체

    const [password, setPassword] = useState(''); // 비밀번호 입력 값을 저장할 상태
    const passwordRef = userRef<HTMLInputElement>(null); // 비밀번호 요소를 가리킬 ref 객체

    
    return (
        <>
            <div className='item-middle '>
                <div className='w-[375px]  rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]'>
                <h1 className='text-xl font-bold mb-[10px]'>Login Into App</h1>
                <p className='text-sm mb-5'>Please enter your details to continue.</p>
                <form action='' className='grid gap-4'>
                    <input
                    type='email'
                    className='input-style1'
                    placeholder='someone@example.com'
                    />
                    <input
                    type='password'
                    className='input-style1'
                    placeholder='Enter Password'
                    />
                    <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        id='chk'
                        className="w-5 h-5 appearance-none border border-[#4f4f4f] bg-white checked:bg-[#4f4f4f] rounded-[5px] checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center"
                    />
                    <label htmlFor='chk'>
                        <span className='text-sm color-[#4f4f4f]'>
                        I agree with <em className='not-italic font-bold'>terms</em>{' '}
                        and <em className='not-italic font-bold'>policies</em>.
                        </span>
                    </label>
                    </div>
                    <div className='mt-4 grid gap-4'>
                    <button
                        type='submit'
                        className='h-[44px] text-sm w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg disabled:bg-[#BDBDBD] disabled:cursor-not-allowed'
                    >
                        Log In
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}