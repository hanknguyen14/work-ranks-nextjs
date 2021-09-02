import React, { useMemo } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import English from '../compiled-locales/en.json';
import Vietnamese from '../compiled-locales/vi.json';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const shortLocale = locale || 'en';

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'vi':
        return Vietnamese;
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default MyApp;
