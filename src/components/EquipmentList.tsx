import type { Equipment } from "../App";

type Props = {
  equipmentList: Equipment[];
  setEquipmentList: React.Dispatch<React.SetStateAction<Equipment[]>>;
};

export default function EquipmentList({
  equipmentList,
  setEquipmentList,
}: Props) {
  const changeStatus = (id: string) => {
    setEquipmentList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "利用可能" ? "貸出中" : "利用可能",
            }
          : item
      )
    );
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>備品ID</th>
          <th>備品名</th>
          <th>カテゴリ</th>
          <th>貸出状況</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {equipmentList.map((item) => (
          <tr key={item.id}>
            <td>{item.equipmentId}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.status}</td>
            <td>
              <button onClick={() => changeStatus(item.id)}>
                {item.status === "利用可能" ? "貸出" : "返却"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}