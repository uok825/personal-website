import { Page, Text, Card } from "@geist-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Page width="1200px">
      <Header />
      <Card mt={3} justify="center" hovarable>
        <Text h1 style={{ fontSize: 30 }}>
          Hi, I'm Utku Ömer Kılıç.
        </Text>
        <Text style={{ fontSize: 20 }} s b justify="center">
          As a student of Istanbul Technical University, and Head of Developer
          Committee of ITU Blockchain, studying Environmental Engineering with a
          strong interest in software and blockchain development.
          <div />I am seeking opportunities to leverage my skills and knowledge
          to contribute to innovative projects in the field.
        </Text>
      </Card>
      <Footer />
    </Page>
  );
};

export default App;
