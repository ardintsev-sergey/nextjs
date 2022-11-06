import { AppProps } from '../node_modules/next/app';
import Head from '../node_modules/next/head';
import '../styles/globals.css';
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';
import { Router } from 'next/router';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

function MyApp({ Component, pageProps, router }: AppProps) { 
  return  <>
      <Head>
        <title>MyTop - мой топ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" /> 
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>       
        <meta property='og:local' content='ru_RU'/>       
      </Head>
      <YMInitializer
        accounts={[]}
        options={{webvisor: true, defer: true}}
        version='2'
      />
      <Component {...pageProps} />;
    </>;  
}

export default MyApp;