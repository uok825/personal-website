import { Page, Card, Text, Grid } from "@geist-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Stack = () => {
  return (
    <Page width="1200px">
      <Header />
      <Grid.Container gap={2} mt={3} justify="center">
        <Card shadow width="100%">
          <Grid>
            <Text h3>JavaScript & TypeScript </Text>
            <Text p>
              {" "}
              My “main” interested programming languages, I've worked with it
              for about two and half year. I've used it in the front-end with
              Nextjs & React, <div></div>ExpressJS for API's.{" "}
            </Text>
          </Grid>
        </Card>
        <Card shadow width="100%">
          <Grid>
            <Text h3>Solidity</Text>
            <Text p>
              {" "}
              I've been using Solidity about two years. I’m enjoying coding
              contracts. Build some products and join lot of hackathons.{" "}
            </Text>
          </Grid>
        </Card>
        <Card shadow width="100%">
          <Grid>
            <Text h3>SQLite</Text>
            <Text p>
              {" "}
              I've used SQLite engine for HackFS23 hackathon. Have a few
              knowledge about it.{" "}
            </Text>
          </Grid>
        </Card>
      </Grid.Container>
      <Footer />
    </Page>
  );
};

export default Stack;
