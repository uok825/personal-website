import { Grid, Page, Text, Button } from "@geist-ui/react";
import React from "react";

const Header = () => {
  function handleAboutClick() {
    window.location.href = "/#/";
  }
  function handleExperienceClick() {
    window.location.href = "/#/experience";
  }
  function handleStackClick() {
    window.location.href = "/#/stack";
  }
  function handleContactClick() {
    window.location.href = "/#/contact";
  }

  return (
    <Page.Header>
      <Grid.Container justify="center">
        <Grid xs={12} md={6} justify="center">
          <Button onClick={handleAboutClick} auto type="secondary">
            <Text h2>About</Text>
          </Button>
        </Grid>
        <Grid xs={13} md={6} justify="center">
          <Button onClick={handleExperienceClick} auto type="secondary">
            <Text h2>Experience</Text>
          </Button>
        </Grid>
        <Grid xs={12} md={6} justify="center">
          <Button onClick={handleStackClick} auto type="secondary">
            <Text h2>Stack</Text>
          </Button>
        </Grid>
        <Grid xs={13} md={6} justify="center">
          <Button onClick={handleContactClick} auto type="secondary">
            <Text h2>Contact</Text>
          </Button>
        </Grid>
      </Grid.Container>
    </Page.Header>
  );
};

export default Header;
