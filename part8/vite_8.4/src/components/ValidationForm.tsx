import { useState } from "react";

export default function ValidationForm() {
    const [formData, setFormData] = useState({
        username : '',
        age : '',
        birthdate : '',
        phone : '',
        website : '',
        color : '#000000',
        rating : '5',
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        
    };
}
