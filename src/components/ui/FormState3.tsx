import { useId, useState } from 'react';

export default function StateForm3() {
    const [form, setForm] = useState({
        name: 'Tom',
        age: 30,
    });
    // フォーム要素の変更をStateに反映
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    // 送信ボタンでログにメッセージ出力
    const show = () => {
        console.log(`こんにちは、${form.name} (${form.age}歳)さん`);
    }
    const id = useId();
    return (
        <form>
            <div>
                <label htmlFor={`${id}-name`}>名前:</label>
                <input id={`${id}-name`} name="name" type="text"
                    onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor={`${id}-age`}>年齢:</label>
                <input id={`${id}-age`} name="age" type="text"
                    onChange={handleForm} value={form.age} />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
            <p>こんにちは、{form.name}({form.age})さん</p>
        </form>
    );
}