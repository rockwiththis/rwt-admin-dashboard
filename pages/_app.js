import React from 'react'
import App, { Container } from 'next/app'
import Meta from '../components/Meta'
import Layout from '../components/Layout'


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidCatch (error, errorInfo) {
    console.log('!!! ERROR CAUGHT', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Meta />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
