import React from 'react'
import Head from 'next/head'

import Header from '../shared/header'
import Footer from '../shared/footer'

const MainLayout = ({children}) => {
  return (
    <div className="app">

      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
	      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Head>

      <Header />

      {children}

      <Footer />

    </div>
  )
}

export default MainLayout
