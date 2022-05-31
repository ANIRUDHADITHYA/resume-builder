import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { appStore } from '../../src/redux/store';
import withReduxStore from '../../src/lib/with-redux-store';
import { ToastContainer } from 'react-toastify';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Head from 'next/head';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import 'react-tippy/dist/tippy.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import '../../src/theme/main.scss';

import { Colors } from '@colors';

const theme = {
    colors: {
        ...Colors,
    },
};

class MyApp extends App {
    constructor(props: any) {
        super(props);
        this.persistor = persistStore(props.reduxStore);
    }

    persistor: any;

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Resume Builder</title>
                    <meta name="description" content="A modern real time design and 100% free resume builder."></meta>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
                </Head>
                <Provider store={appStore}>
                    <PersistGate loading={<Component {...pageProps} />} persistor={this.persistor}>
                        <ThemeProvider theme={theme}>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </PersistGate>
                </Provider>
                <ToastContainer />
            </>
        );
    }
}

export default withReduxStore(MyApp);
