import { Page, Card, Link, Grid } from "@geist-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <Page width="1200px">
      <Header />
      <Grid.Container gap={2} mt={3} justify="center">
        <Grid>
          <Card shadow width="100%">
            <Link justify="center" href="mailto:utkuomerkilic@gmail.com">
              📧 Mail
            </Link>
          </Card>
        </Grid>
        <Grid>
          <Card shadow width="100%">
            <Link
              justify="center"
              href="https://twitter.com/utmrklc"
              target="_blank"
            >
              🐦 Twitter{" "}
            </Link>
          </Card>
        </Grid>
        <Grid>
          <Card shadow width="100%">
            <Link
              justify="center"
              href="https://www.linkedin.com/in/utkuomer/"
              target="_blank"
            >
              🔗 Linkedin
            </Link>
          </Card>
        </Grid>
        <Grid>
          <Card shadow width="100%">
            <Link
              justify="center"
              href="https://github.com/uok825"
              target="_blank"
            >
              👾 Github
            </Link>
          </Card>
        </Grid>
      </Grid.Container>
      <Footer />
    </Page>
  );
};

export default Contact;
