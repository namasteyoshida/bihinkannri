import React, { useId, useState } from "react";

export default function FormCheck() {
    // Stateを初期化
    const [form, setForm] = useState({
        agreement: true,
    });
    // State反映
    const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;
        setForm(prev => ({
            ...prev,
            [name]: checked,
        }));
    };
    const show = () => {
        console.log(`同意確認: ${form.agreement ? '同意' : '反対'}`);
    };
    const id = useId();
    return (
        <form>
            <label htmlFor={`${id}-agreement`}>同意します:</label>
            <input 
                id={`${id}-agreement`}
                name="agreement"
                type="checkbox" 
                checked={form.agreement}
                onChange={handleFormCheck}/>
            <br />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}