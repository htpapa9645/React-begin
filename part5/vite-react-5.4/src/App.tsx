// public 폴더에서 이미지 렌더링하기 -> img 태그로 렌더링하기
export default function App(){
    return(
        <>
            <h1>public 폴더에서 이미지 렌더링하기 -&gt; img 태그로 렌더링하기</h1>
            <div style={{height: '400px', width: '400px'}}>
                <img src='/assets/images/ocean.jpg' alt='ocean' />
            </div>
        </>
    );
}

// css 속성으로 랜더링하기
export function App2(){
    return(
        <>
            <h1>css 속성으로 랜더링하기</h1>
            <div style={{height: '400px', width: '400px'}}>
                <div className='bg'></div>
            </div>
        </>
    );
}

// jsx 로 직접 스타일 정의
export function App3(){
    return(
        <>
            <h1>jsx 로 직접 스타일 정의</h1>
            <div style={{height: '400px', width: '400px'}}>
                <div style={{
                    width: '640px',
                    height: '360px',
                    background: `url('/assets/images/ocean.jpg') no-repeat center center`,
                }}></div>
            </div>
        </>
    );
}

// src 폴더에서 이미지 렌더링하기 -> img 태그로 렌더링하기
import ocean from './assets/images/ocean.jpg';

export function App4(){
    return(
        <>
            <h1>src 폴더에서 이미지 렌더링하기 -&gt; img 태그로 렌더링하기</h1>
            <div style={{height: '400px', width: '400px'}}>
                <img src={ocean} alt='ocean' />
            </div>
        </>
    );
}

// src 폴더에서 이미지 렌더링하기 -> CSS 속성으로 렌더링하기
import ocean2 from './assets/images/ocean.jpg';

export function App5(){
     return(
        <>
            <h1>src 폴더에서 이미지 렌더링하기 -&gt; CSS 속성으로 렌더링하기</h1>
            <div style={{height: '400px', width: '400px'}}>
                <div style={{
                    width: '546px',
                    height: '320px',
                    background: `url(${ocean2})`
                }}></div>
            </div>
        </>
    );
}