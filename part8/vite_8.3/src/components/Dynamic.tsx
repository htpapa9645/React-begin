import useInputEx from "../hooks/useInputEx";

export default function Dynamic() {
    // useInputEx 훅을 사용해 텍스트 필드와 유효성 검사 로직 분리
    const { // 이름 입력 필드 : 공백을 허용하지 않음
        value : name,
        error : nameError,
        onChange : handleNameChange, 
        validate : validateName,
    } = useInputEx<string>({
        initialValue : '',
        validateFn : (value) => {
            if(!value) return '이름은 필수입니다.';
            return undefined;
        },
    });

    const { // 이메일 입력 필드 : 0 포함 여부 확인
        value : email,
        error : emailError,
        onChange : hanleEmailChange,
        validate : validateEmail,
    } = useInputEx<string>({
        initialValue : '',
        validateFn : (value) => {
            if (!value.includes('0')) return '올바른 이메일을 입력하세요';
        },
    });

    const { //전화번호 입력 필드 : 11자리 숫자만 허용
        value : phone,
        error : phoneError,
        onChange : handlePhoneChange,
        validate : validatePhone,
    } = useInputEx<string>({
        initialValue : '',
        validateFn: (value) => {
            if(!value.match(/^\d{11}$/)) return '전화번호는 11 자리여야 합니다.';
            return undefined;
        },
    });
}