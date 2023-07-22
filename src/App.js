import { Page, Text, Card } from '@geist-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <Page width="1200px">
      <Navbar />
      <Card mt={3} justify="center" hovarable>
    <Text h1 style={{fontSize: 30}}>Hi, I'm Utku Ömer Kılıç.</Text>
    <Text  style={{fontSize: 20}} s b justify="center">
      As a student of Istanbul Technical University studying Environmental Engineering with a strong interest in software and blockchain development.
      <div />
      I am seeking opportunities to leverage my skills and knowledge to contribute to innovative projects in the field.
    </Text>
  </Card>
  <Footer />
    </Page>
  )
}

export default App