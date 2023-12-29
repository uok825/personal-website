import { Grid, Page, Text, Link } from "@geist-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Page.Header>
      <Grid.Container>
        <Grid xs={5} justify="left">
          <Link href="/#/">
            <Text h2>About</Text>
          </Link>
        </Grid>
        <Grid xs={7} justify="center">
          <Link href="/#/experience">
            <Text h2>Experience</Text>
          </Link>
        </Grid>
        <Grid xs={7} justify="center">
          <Link href="/#/stack">
            <Text h2>Stack</Text>
          </Link>
        </Grid>
        <Grid xs={5} justify="right">
          <Link href="/#/contact">
            <Text h2>Contact</Text>
          </Link>
        </Grid>
      </Grid.Container>
    </Page.Header>
  );
};

export default Navbar;
