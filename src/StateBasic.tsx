import { useState } from "react";

type props = {
    init: number
}

export default function StateBasic({ init }: props) {
    // Props(init)でState(count)を初期化
    const [count, setCount] = useState(init);
    // [カウント] ボタンクリック時にカウント値をインクリメント
    const handleClick = () => setCount(count + 1);
    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回クリックされました</p>
        </>
    );
}