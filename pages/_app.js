import React from 'react'
import App, { Container } from 'next/app'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import { checkIsLoggedIn } from '../api/auth/cognito'
import redirect from '../lib/redirect.js'
import '../index.scss'


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // check if user is logged in
    // const { loggedIn, user } = checkIsLoggedIn()
    // if (!loggedIn) {
    //   // If not logged in, redirect to login page
    //   redirect({}, '/login')
    // }

    return { pageProps, user: null }
  }

  componentDidCatch (error, errorInfo) {
    console.log('!!! ERROR CAUGHT', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render () {
    const { Component, pageProps, user } = this.props

    return (
      <Container>
        <Meta />
        <Layout user={user}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
