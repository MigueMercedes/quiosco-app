import type { AppProps } from 'next/app';
import { QuioscoProvider } from '../context/QuioscoProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  );
}

export default MyApp;
