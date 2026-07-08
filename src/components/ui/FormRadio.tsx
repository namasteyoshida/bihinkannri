import React, { useId, useState } from "react";

export default function FormRadio() {
    // Stateを初期化
    const [form, setForm] = useState({
        os: 'windows'
    });
    // ラジオボタン変更時に入力値をStateに反映
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    const show = () => {
        console.log(`使用OS: ${form.os}`);
    };
    const id = useId();
    return (
        <form>
            <fieldset>
                <legend>使用OS:</legend>
                <label htmlFor={`${id}-os_win`}>Windows</label>
                <input 
                    id={`${id}-os_win`}
                    name="os"                    
                    type="radio" 
                    value="windows"
                    checked={form.os === 'windows'}
                    onChange={handleForm} />
                <br />
                <label htmlFor={`${id}-os_mac`}>macOS</label>
                <input 
                    id={`${id}-os_mac`}
                    name="os"                    
                    type="radio" 
                    value="mac"
                    checked={form.os === 'mac'}
                    onChange={handleForm} />
                <br />
                <label htmlFor={`${id}-os_lin`}>Linux</label>
                <input 
                    id={`${id}-os_lin`}
                    name="os"                    
                    type="radio" 
                    value="linux"
                    checked={form.os === 'linux'}
                    onChange={handleForm} />
                <br />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}