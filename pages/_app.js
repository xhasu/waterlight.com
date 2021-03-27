import Head from 'next/head'

import MainLayout from '../components/layouts/main-layout';
import { LanguageProvider } from '../contexts/language-context';

import 'swiper/swiper.scss'
import '../styles/scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"></meta>
      </Head>
      <LanguageProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
