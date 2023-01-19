import '@styles/global.css';
import 'ui/styles.css';

import GoogleAnalytics from '@modules/google/components/google-analytics';
import IconsProvider from '@modules/icons/context/icons/icons-context';
import ThemeProvider from '@modules/theming/context/theme-context';
import { Poppins } from '@next/font/google';
import { store } from '@state/store';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider, ToastsContainer } from 'ui';

const PoppinsFont = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <main className={`${PoppinsFont.variable} relative scroll-smooth font-sans subpixel-antialiased`}>
      <Provider store={store}>
        <ThemeProvider>
          <ToastProvider>
            <IconsProvider>
              <GoogleAnalytics />
              <Component {...pageProps} />
              <ToastsContainer />
              <style jsx global>{`
                :root {
                  --font-sans: ${PoppinsFont.style.fontFamily};
                }
              `}</style>
            </IconsProvider>
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    </main>
  );
};

export default IconozenApp;
