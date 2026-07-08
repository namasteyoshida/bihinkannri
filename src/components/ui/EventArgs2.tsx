import type React from "React";

export default function EventArgs2() {
    const current = (e: React.MouseEvent<HTMLButtonElement>) => {
        const d = new Date();
       
      const type = e.currentTarget.dataset.type;
      switch(type) {
        case "date":
            console.log(`${e.currentTarget.id}: ${d.toLocaleDateString()}data-xxxx`);
            break;
        case "time":
            console.log(`${e.currentTarget.id}: ${d.toLocaleTimeString()}data-xxxx`);
            break;
        default:
            console.log(`${e.currentTarget.id}: ${d.toLocaleString()}data-xxxx`);
            break;
        
      }

    };
    return(
        <div>
            <button id = "dt" data-type="date" onClick={current}>現在日時</button>
            <button id = "date" data-type="data" onClick={current}>現在日付</button>
            <button id = "time" data-type="time" onClick={current}>現在時刻</button>
        </div>
    );
}
