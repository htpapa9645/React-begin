// 기존 인라인 스타일
export default function App(){
    return(
        <>
            <button
                style={{
                    background: 'transparent',
                    borderRadius: '3px',
                    color: '#bf4f74',
                    margin: '0 1em',
                    padding: '0.25em 1em',
                }}
            >클릭해봐유_기본 인라인</button>
        </>
    );
}

// 기본 인라인 스타일 -> Tailwind CSS 로 변환
export function App2(){
    return(
        <>
            <hr/>
            <div>
                <button className='
                        bg-transparent
                        rounded-[3px]
                        border-2
                        border-[#bf4f74]
                        text-[#bf4f74]
                        m-[0.1em]
                        py-[0.25em]
                        px-[1em]
                '>
                    클릭해봐유_Tailwind</button>
            </div>
        </>
    );
}

// tailWind-merge 라이브러리 > twMerge() 함수 사용
import { twMerge } from "tailwind-merge";

export function App3(){
    return(
        <>
            <hr/>
            <div>
                <button 
                    className={twMerge(
                        'bg-transparent text-[#bf4f74] rounded-[3px] border-2 border[#f4f88] m-[0.2em] py-[0.5em] px-[1em]'
                        , 'bg-rose-500 text-white'
                    )}
                >
                    클릭해봤지유?
                </button>
            </div>
        </>
    );
}