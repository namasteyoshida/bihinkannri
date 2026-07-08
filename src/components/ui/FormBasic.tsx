import { useId } from "react";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
import './FormBasic.css';

type FormValues = {
    name: string;
    email: string;
    gender: "male" | "female";
    memo: string;
};
  

export default function FormBasic() {
    // 既定値を準備
    const defaultValues: FormValues = {
        name: 'Bob',
        email: 'bob@example.com',
        gender: 'male',
        memo: '',
    };

    // フォームの初期化
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues,
    });
    // サブミット時の処理
    const onsubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };
    const onerror: SubmitErrorHandler<FormValues> = (err) => {
        console.log(err);
    };

    const id = useId();

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            {/* 検証ルールなどをフォームに紐付け */}
            <div>
                <label htmlFor={`${id}-name`}></label>
                <input id={`${id}-name`} type="text" 
                    {...register(`name`, {
                        required: '名前は必須入力です',
                        maxLength: {
                            value: 20,
                            message: '名前は20文字以内にしてください'
                        },
                    })}
                />
                <div className="error">{errors.name?.message}</div>
            </div>
            <div>
                <label>性別:</label><br />
                <label>
                    <input id="male" type="radio" value="male"
                        {...register('gender', {
                            required: '性別は必須です',
                        })}
                    />男性
                </label>
                <label>
                    <input id="female" type="radio" value="female"
                        {...register('gender', {
                            required: '性別は必須です',
                        })}
                    />女性
                </label>
                <div className="error">{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor={`${id}-email`}></label>
                <input id={`${id}-email`} type="email"
                    {...register('email', {
                        required: 'メールアドレスは必須入力です',
                        pattern: {
                            value: /^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i,
                            message: 'メールアドレスの形式が不正です'
                        }
                    })}
                />
                <div className="error">{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor={`${id}-memo`}>備考:</label><br />
                <textarea id={`${id}-memo`}
                    {...register('memo', {
                        required: '備考は必須入力です',
                        minLength: {
                            value: 10,
                            message: '備考は10文字以上にしてください',
                        }
                    })}
                />
                <div className="error">{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">送信</button>
            </div>
        </form>
    );
}