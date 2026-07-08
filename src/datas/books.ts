import type { Item } from "../components/ui/ForList";

export const books: Item[] = [
    {
        isbn: "978-4-1234-5678-1",
        title: "TypeScript入門",
        price: 2800,
        summary: "JavaScriptに型を導入し、安全に開発するための基礎を解説した一冊。",
        download: true,
    },
    {
        isbn: "978-4-9876-5432-1",
      title: "React実践ガイド",
      price: 3200,
      summary: "React Hooksを中心に、実務で使えるコンポーネント設計を学べる実践書。",
      download: false,
    },
    {
      isbn: "978-4-1111-2222-3",
      title: "Next.jsではじめるWebアプリ開発",
      price: 3500,
      summary: "Next.jsのルーティングやSSRの考え方を、サンプルアプリを通して解説。",
      download: true,
    },
];