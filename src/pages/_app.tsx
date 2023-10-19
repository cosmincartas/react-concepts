import DefaultLayout from '@/layouts/DefaultLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <main className="flex w-full h-full min-h-screen flex-col items-center justify-center p-12">
                <Component {...pageProps} />
            </main>
        </DefaultLayout>
    );
}
