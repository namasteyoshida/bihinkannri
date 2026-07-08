import React, {useId, useState} from "react";

export default function FormSelect(){
    const[ form, setForm] = useState({
        animal: "dog",
    });
    
    const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setForm( prev => ({
            ...prev,
            [name]: value,
        }));
    };

const show = () => {
    console.log(`好きな動物:${form.animal}`);
}

const id 
=useId();
return(
    <form>
        <label htmlFor={`${id}-animal`}>好きな動物</label>
        <select name="animal" id={`${id}-animal`}
        value = {form.animal} onChange = {handleForm}>
            <option value ="dog">犬</option>
            <option value ="cat">猫</option>
            <option value ="rabbit">うさぎ</option>
            <option value ="fox">狐</option>
        </select>
        <button type="button" onClick={show}>送信</button>
    </form>
);

}
