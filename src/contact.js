import { Page, Card, Link, Grid } from '@geist-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {

  return (
    <Page width="1200px">
      <Navbar />
      <Grid.Container gap={2} mt={3} justify="center">
    <Grid><Card shadow width="100%">
        <Link justify="center" href="mailto:utkuomerkilic@gmail.com">📧 Mail</Link>
    </Card></Grid>
    <Grid><Card shadow width="100%">
        <Link justify="center" href="https://twitter.com/utmrklc" target='_blank'>🐦 Twitter </Link>
    </Card></Grid>
    <Grid><Card shadow width="100%">
        <Link justify="center" href="https://www.linkedin.com/in/utku-%C3%B6mer-k%C4%B1l%C4%B1%C3%A7-8403761b2/" target='_blank'>🔗 Linkedin</Link>
    </Card></Grid>
    <Grid><Card shadow width="100%">
        <Link justify="center" href="https://github.com/uok825" target='_blank'>👾 Github</Link>
    </Card></Grid>
  </Grid.Container>
  <Footer />
    </Page>
  )
}

export default Contact