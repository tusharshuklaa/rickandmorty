import React from 'react';
import { AppProps } from 'next/app';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faToggleOff, faToggleOn, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './../styles/globals.scss'

import Header from '../components/Header';
import Footer from '../components/Footer';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;
library.add(
  faGithub,
  faToggleOff,
  faToggleOn,
  faSearch
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className='rickAndMorty'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp