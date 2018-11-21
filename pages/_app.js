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

    return { pageProps }
  }

  state = { loggedIn: false }

  componentDidMount() {
    // check if user is logged in
    const { loggedIn, user } = checkIsLoggedIn()
    console.log('>> user', user, loggedIn)
    if (loggedIn) this.setState({ loggedIn })
    if (!loggedIn) {
      // If not logged in, redirect to login page
      redirect({}, '/login')
    }
  }

  componentDidCatch (error, errorInfo) {
    console.log('!!! ERROR CAUGHT', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render () {
    const { loggedIn } = this.state
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Meta />
        <Layout isLoggedIn={loggedIn}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
