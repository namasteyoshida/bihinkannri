import { useId, useState } from "react";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";

// 貸出台帳の項目に合わせた型定義（equipmentIdをequipmentNameに変更）
type LendingFormValues = {
    equipmentName: string;
    userName: string;
    lendDate: string;
};

// リスト表示用の型定義（IDでの紐付けが不要になったためequipmentIdを削除）
type LendingRecord = {
    id: number;
    equipmentName: string;
    userName: string;
    lendDate: string;
};

export default function LendingForm() {
    const today = new Date().toISOString().split('T')[0];

    const defaultValues: LendingFormValues = {
        equipmentName: '', // 初期値を空文字に
        userName: '',
        lendDate: today,
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm<LendingFormValues>({
        defaultValues,
    });

    const [lendingList, setLendingList] = useState<LendingRecord[]>([]);
    const [maxId, setMaxId] = useState(1); // IDの初期値を1に設定

    // 貸出データを登録（リストへ追加）
    const onsubmit: SubmitHandler<LendingFormValues> = (data) => {
        // リストの状態を更新
        setLendingList([
            ...lendingList,
            {
                id: maxId,
                equipmentName: data.equipmentName, // 入力された備品名をそのまま使用
                userName: data.userName,
                lendDate: data.lendDate,
            }
        ]);

        // 次の追加のためにIDをインクリメント
        setMaxId(id => id + 1);

        // 連続して追加しやすいようにフォームをリセット（貸出日はそのまま）
        reset({ equipmentName: '', userName: '', lendDate: data.lendDate });
    };

    const onerror: SubmitErrorHandler<LendingFormValues> = (err) => {
        console.log("バリデーションエラー:", err);
    };

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        setLendingList(lendingList.filter(item => {
            return item.id !== Number(e.currentTarget.dataset.id);
        }));
    };

    const id = useId();

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
                <h2>備品貸出処理</h2>

                {/* --- selectからinput(text)に変更 --- */}
                <div>
                    <label htmlFor={`${id}-equipment`}>貸出備品:</label><br />
                    <input
                        id={`${id}-equipment`}
                        type="text"
                        {...register('equipmentName', {
                            required: '備品名は必須入力です',
                        })}
                    
                    />
                    <div className="error" style={{ color: 'red' }}>{errors.equipmentName?.message}</div>
                </div>

                <div>
                    <label htmlFor={`${id}-username`}>利用者名:</label><br />
                    <input
                        id={`${id}-username`}
                        type="text"
                        {...register('userName', {
                            required: '利用者名は必須入力です',
                            maxLength: {
                                value: 30,
                                message: '利用者名は30文字以内にしてください',
                            },
                        })}
                    />
                    <div className="error" style={{ color: 'red' }}>{errors.userName?.message}</div>
                </div>

                <div>
                    <label htmlFor={`${id}-lenddate`}>貸出日:</label><br />
                    <input
                        id={`${id}-lenddate`}
                        type="date"
                        {...register('lendDate', {
                            required: '貸出日は必須入力です',
                        })}
                    />
                    <div className="error" style={{ color: 'red' }}>{errors.lendDate?.message}</div>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <button type="submit">貸出を実行する</button>
                </div>
            </form>

            <hr style={{ margin: '24px 0' }} />

            <h2>貸出記録</h2>
            {lendingList.length === 0 ? (
                <p>現在、貸出記録はありません。</p>
            ) : (
                <ul>
                    {lendingList.map(record => (
                        <li key={record.id} style={{ marginBottom: '8px' }}>
                            <strong>{record.userName}</strong> さんが 「{record.equipmentName}」 を借りました (日付: {record.lendDate})
                            <button 
                                type="button" 
                                onClick={handleRemove} 
                                data-id={record.id}
                                style={{ marginLeft: '8px' }}
                            >
                                取消
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}