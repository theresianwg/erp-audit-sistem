import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { store, persistor } from './api/store';
import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
