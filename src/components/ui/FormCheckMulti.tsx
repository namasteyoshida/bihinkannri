import React, { useId, useState } from "react";

export default function FormCheckMulti() {
    // Stateを初期化
    const [form, setForm] = useState({
        animal: ['dog', 'cat']
    });
    // State反映
    const handleFormMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.currentTarget;
        const fa = [...form.animal];
        if (checked) {
            fa.push(value);
        } else {
            fa.splice(fa.indexOf(value), 1);
        }
        setForm(prev => ({
            ...prev,
            [name]: fa,
        }));
    };
    const show = () => {
        console.log(`好きな動物: ${form.animal}`);
    };
    const id = useId();
    return (
        <form>
            <fieldset>
                <legend>好きな動物:</legend>
                <label htmlFor={`${id}-animal_dog`}>犬</label>
                <input 
                    id={`${id}-animal_dog`}
                    name="animal"
                    type="checkbox" 
                    value="dog"
                    checked={form.animal.includes('dog')}
                    onChange={handleFormMulti}/>
                <br />
                <label htmlFor={`${id}-animal_cat`}>猫</label>
                <input 
                    id={`${id}-animal_cat`}
                    name="animal"
                    type="checkbox" 
                    value="cat"
                    checked={form.animal.includes('cat')}
                    onChange={handleFormMulti}/>
                <br />
                <label htmlFor={`${id}-animal_rabbit`}>兎</label>
                <input 
                    id={`${id}-animal_rabbit`}
                    name="animal"
                    type="checkbox" 
                    value="rabbit"
                    checked={form.animal.includes('rabbit')}
                    onChange={handleFormMulti}/>
                <br />
                <label htmlFor={`${id}-animal_fox`}>狐</label>
                <input 
                    id={`${id}-animal_fox`}
                    name="animal"
                    type="checkbox" 
                    value="fox"
                    checked={form.animal.includes('fox')}
                    onChange={handleFormMulti}/>
                <br />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}