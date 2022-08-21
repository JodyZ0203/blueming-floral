import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Box, Divider, Text } from '@chakra-ui/react'
import { Magic } from 'magic-sdk'

const Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      email: e.currentTarget.email.value,
    }

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      })
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
        <Header/>
        <Box>
        <Navigation/>
        <div className="login">
        <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
        <Divider margin='15px'></Divider>
        <img src="blooming.svg"/>
      </div>
      <style jsx>{`
        .login {
            max-width: 30rem;
            margin: 6rem auto 6rem;
            padding: 1rem;
            border: 1px solid #dfe1e5;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0px 0px 6px 6px #f7f7f7;
            box-sizing: border-box;
        }
      `}</style>
      </Box>
      <Footer style={{position: 'fixed', bottom: 0, width: '100%'}}/>
        </>
  )
}

export default Login