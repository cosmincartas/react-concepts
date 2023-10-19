import { Navbar, Sidebar } from '@/components';
import React, { useState } from 'react';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const [isVisibile, setIsVisible] = useState(false);

    function handleMenuPress() {
        setIsVisible((current) => !current);
    }
    return (
        <>
            <Navbar onMenuPress={handleMenuPress} />
            <Sidebar isVisible={isVisibile} />
            {children}
        </>
    );
}
