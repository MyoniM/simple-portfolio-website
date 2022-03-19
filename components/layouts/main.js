import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yonatan's homepage" />
        <meta name="author" content="Yonatan Merkebu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/me.jpg" type="image/x-icon" />
        <meta property="og:site_name" content="Yonatan Merkebu's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <meta property="og:title" content="Title" />
        <meta property="og:image" content="/images/me.jpg" />
        
        <title>Yonatan Merkebu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <div style={{ marginTop: '30px' }}></div>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
