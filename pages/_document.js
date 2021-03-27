import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          
	        <link rel="icon" href="/favicon.ico?v=1.0.0" />

          <link rel="stylesheet" href="/css/fonts.css"/>
      
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument