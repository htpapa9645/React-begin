import { useRef } from "react";

export default function Checkbox4(){
    const agree1Ref = useRef<HTMLInputElement>(null);
    const agree2Ref = useRef<HTMLInputElement>(null);
    const agree3Ref = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        const formState = {
            agree1: agree1Ref.current?.checked,
            agree2: agree2Ref.current?.checked,
            agree3: agree3Ref.current?.checked,
        };
        console.log('동의 1 : ' , formState.agree1);
        console.log('동의 2 : ' , formState.agree2);
        console.log('동의 3 : ' , formState.agree3);
    };

    return (
        
    );
}