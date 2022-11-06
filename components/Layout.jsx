import React from 'react';
import Head from 'next/head';


import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Albertase Shop</title>
        <link rel="shortcut icon" href="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/238476/1.jpg?0711"/>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout