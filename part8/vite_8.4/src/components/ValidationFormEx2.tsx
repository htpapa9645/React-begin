import { ErrorMessage, Field, Form, Formik } from "formik";

interface ErrorValues {
    email? : string,
    password? : string,
}

export default function ValidationFormEx2() {
    return (
        <>
            <Formik
                initialValues={{ email : '', password : '',}}
                onSubmit={(values, { setSubmitting }) => { 
                    console.log(values);
                    setSubmitting(true); // 제출 중 상태로 전환
                    setTimeout(() => { // 서버로 요청을 보내는 대신 setTimeout()으로 지연 처리
                        console.log('폼 데이터 : ', values);
                        setSubmitting(false); // 제출 완료
                    }, 3000);
                }}
                validateOnChange={false} // 입력 중에는 유효성 검사 비활성화
                validateOnBlur={true} // 포커스가 빠져나갈 때 유효성 검사 활성화
                validate={(values) => {
                    const errors : ErrorValues = {};
                    if(!values.email){
                        errors.email = '필수 입력 항목입니다.';
                    } else if(!values.email.includes('@')){
                        errors.email = '올바르지 않은 이메일 형식입니다.';
                    }

                    if(!values.password){
                        errors.password = '필수 입력 항목입니다.';
                    } else if(values.password.length < 4){
                        errors.password = '비밀번호는 대소문자, 특수문자를 포함해 4자 이상이어야 합니다.';
                    }

                    return Object.keys(errors).length > 0 ? errors : {};                    
                }}
            >
                {({ isSubmitting }) => (
                      <Form>
                        <Field name='email' type='email' 
                            placeholder='이메일을 입력하세요'
                            component='input' />
                        <ErrorMessage name="email" component='div' />

                        <Field name='password' type='password' 
                            placeholder='비밀번호를 입력하세요'
                            component='input' />
                        <ErrorMessage name="password" component='div' />

                        <button type='submit' disabled={isSubmitting}>{isSubmitting ? '로그인 중...' : '로그인' }</button>
                    </Form>
                )}
                {/* <Form>
                    <Field name='email' type='email' 
                        placeholder='이메일을 입력하세요'
                        component='input' />
                    <ErrorMessage name="email" component='div' />

                    <Field name='password' type='password' 
                        placeholder='비밀번호를 입력하세요'
                        component='input' />
                    <ErrorMessage name="password" component='div' />

                    <button type='submit'>로그인2</button>
                </Form> */}
            </Formik>
        </>
    );
}