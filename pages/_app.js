import Head from 'next/head';
import '../styles/lista.scss';

export default function MyApp({ Component, pageProps}){
    return (
        <>
            <Head>
                <title>Oceano | Teste de Front-End</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}