import type { ReactNode } from "react";

type PanelProps = {
  title: string;
  children: ReactNode;
};

export default function Panel({ title, children }: PanelProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px" }}>
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
}