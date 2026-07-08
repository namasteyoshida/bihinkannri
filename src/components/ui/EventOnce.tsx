import { useState } from "react";

export default function EventOnce() {
    // クリック済みか管理するためのフラグ
    const [clicked, setClicked] = useState(true);
    // 今日の運勢
    const [result, setResult] = useState('-');
    const handleClick = () => {
        // まだ占っていなければ占いを実行
        if (clicked) {
            setResult(String(Math.floor(Math.random() * 100 + 1)));
            // フラグ反転
            setClicked(false);
        } 
    };

    return (
        <>
            <button onClick={handleClick}>結果表示</button>
            <p>今日の運勢は{result}点です</p>
        </>
    );
}