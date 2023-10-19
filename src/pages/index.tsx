import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className={`flex ${inter.className}`}>
            <h1 className="text-4xl">From Zero to Hero</h1>
        </div>
    );
}
