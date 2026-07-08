import { useState } from "react";
import type { Equipment } from "../App";

type Props = {
  equipmentList: Equipment[];
  setEquipmentList: React.Dispatch<React.SetStateAction<Equipment[]>>;
};

export default function EquipmentForm({
  equipmentList,
  setEquipmentList,
}: Props) {
  const [equipmentId, setEquipmentId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("PC");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEquipment: Equipment = {
      id: crypto.randomUUID(),
      equipmentId,
      name,
      category,
      status: "利用可能",
    };

    setEquipmentList([...equipmentList, newEquipment]);

    setEquipmentId("");
    setName("");
    setCategory("PC");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>備品登録</h2>

      <div>
        <label>備品ID</label>
        <input
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
        />
      </div>

      <div>
        <label>備品名</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>カテゴリ</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>PC</option>
          <option>モニター</option>
          <option>プロジェクター</option>
          <option>充電器</option>
          <option>その他</option>
        </select>
      </div>

      <button type="submit">登録</button>
    </form>
  );
}