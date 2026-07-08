import type { ReactNode } from "react";

type LayoutProps = {
    header: ReactNode;
    children: ReactNode;
    footer: ReactNode;
};

export default function Layout({ header,children, footer }: LayoutProps) {
    return (
        <>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </>
    );
}

