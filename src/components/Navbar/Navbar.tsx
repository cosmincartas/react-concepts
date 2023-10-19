import React from 'react';
import { Menu } from 'lucide-react';

export interface NavbarProps {
    onMenuPress: () => void;
}

export function Navbar({ onMenuPress }: NavbarProps) {
    return (
        <div className="flex">
            <Menu className="cursor-pointer" onClick={onMenuPress} />
        </div>
    );
}
