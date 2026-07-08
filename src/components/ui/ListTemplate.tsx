import type { ReactNode } from "react";
import type { Item } from "./ForList";

type ListTemplateProps = {
    src: Item[];
    children: (item: Item) => ReactNode;
}

export default function ListTemplate({src, children}: ListTemplateProps) {
    return (
        <dl>
            {src.map((elem) => (
                <div key={elem.isbn}>
                    {children(elem)}
                </div>
            ))}
        </dl>
    );
}