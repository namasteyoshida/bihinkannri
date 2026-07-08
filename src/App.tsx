import { useState } from "react";
import EquipmentList from "./components/EquipmentList";
import EquipmentForm from "./components/EquipmentForm";

export type Equipment = {
  id: string;
  equipmentId: string;
  name: string;
  category: string;
  status: "利用可能" | "貸出中";
};

function App() {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([
    {
      id: "1",
      equipmentId: "EQ001",
      name: "ノートPC",
      category: "PC",
      status: "利用可能",
    },
  ]);

const [searchKeyword, setSearchKeyword] = useState("");
  
const filteredList = equipmentList.filter((item) =>
  item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
  item.equipmentId.toLowerCase().includes(searchKeyword.toLowerCase())
);

  return (
    <>
      <h1>備品管理アプリ</h1>
      <EquipmentForm
        equipmentList={equipmentList}
        setEquipmentList={setEquipmentList}
      />
      <div>
  <input
    type="text"
    placeholder="備品ID・備品名で検索"
    value={searchKeyword}
    onChange={(e) => setSearchKeyword(e.target.value)}
  />
</div>
      <EquipmentList
  equipmentList={filteredList}
  setEquipmentList={setEquipmentList}
/>
    </>
  );
}

export default App;