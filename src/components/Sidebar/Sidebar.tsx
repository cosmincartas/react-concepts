import Link from 'next/link';

export interface SidebarProps {
    isVisible: boolean;
}

export function Sidebar({ isVisible }: SidebarProps) {
    return (
        <div
            className="Sidebar flex flex-col absolute w-[300px] p-4"
            style={{ left: isVisible ? '0' : '-100%' }}>
            <Link href="/">Homepage</Link>
            <Link href="/introduction">Introduction</Link>
        </div>
    );
}
