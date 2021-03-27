import React from 'react'
import Head from 'next/head'

import Header from '../shared/header'
import Footer from '../shared/footer'

const MainLayout = ({children}) => {
  return (
    <div className="app">

      <Head>
        <title>WATERLIGHT</title>
      </Head>

      <Header />

      {children}

      <Footer />

    </div>
  )
}

export default MainLayout
