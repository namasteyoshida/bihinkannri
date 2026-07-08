import React, { useId, useState } from "react";

export default function StateNest() {
    // 入れ子のStateを宣言
    const [form, setForm] = useState({
        name: 'Tom',
        address: {
            prefecture: '東京都',
            city: '江東区'
        }
    });
    // 1段目の要素を更新するためのハンドラー
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    // 2段目の要素を更新するためのハンドラー
    const handleNestForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value,
            }
        }));
    };
    // 送信ボタンのクリックでフォーム情報をログ出力
    const show = () => {
        console.log(`${form.name}(${form.address.prefecture}/${form.address.city})`);
    }
    const id = useId();
    return (
        <form>
            <div>
                <label htmlFor={`${id}-name`}>名前:</label>
                <input 
                    id={`${id}-name`}
                    name="name"                    
                    type="text"
                    onChange={handleForm}
                    value={form.name} />
            </div>
            <div>
                <label htmlFor={`${id}-prefecture`}>住所(都道府県):</label>
                <input 
                    id={`${id}-prefecture`}
                    name="prefecture"                    
                    type="text"
                    onChange={handleNestForm}
                    value={form.address.prefecture} />
            </div>
            <div>
                <label htmlFor={`${id}-city`}>住所(市町村):</label>
                <input 
                    id={`${id}-city`}
                    name="city"                    
                    type="text"
                    onChange={handleNestForm}
                    value={form.address.city} />
            </div>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}