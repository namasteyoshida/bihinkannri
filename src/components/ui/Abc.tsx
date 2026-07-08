import React, { useState } from 'react';

// 備品の型定義
type Equipment = {
  id: number;
  name: string;
  category: string;
  quantity: number;
};

const Abc: React.FC = () => {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');

  // 登録処理
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category || quantity === '') return;

    const newEquipment: Equipment = {
      id: Date.now(), // 簡易的な一意のIDとして現在時刻を使用
      name,
      category,
      quantity: Number(quantity),
    };

    setEquipmentList([...equipmentList, newEquipment]);
    
    // 入力フォームをリセット
    setName('');
    setCategory('');
    setQuantity('');
  };

  // 削除処理
  const handleDelete = (id: number) => {
    setEquipmentList(equipmentList.filter(item => item.id !== id));
  };

  return (
    <div className="equipment-manager">
      <h1>備品登録管理システム</h1>

      {/* 登録フォーム */}
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label>備品名</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            placeholder="例: 24インチモニター" 
          />
        </div>
        <div className="form-group">
          <label>カテゴリ</label>
          <input 
            type="text" 
            value={category} 
            onChange={e => setCategory(e.target.value)} 
            required 
            placeholder="例: PC周辺機器" 
          />
        </div>
        <div className="form-group">
          <label>数量</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={e => setQuantity(Number(e.target.value))} 
            required 
            min="1" 
          />
        </div>
        <button type="submit" className="submit-btn">登録する</button>
      </form>

      {/* 一覧表示 */}
      <div className="equipment-list">
        <h2>登録済み備品一覧</h2>
        {equipmentList.length === 0 ? (
          <p className="empty-message">登録されている備品はありません。</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>備品名</th>
                <th>カテゴリ</th>
                <th>数量</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {equipmentList.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="delete-btn"
                    >
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Abc;