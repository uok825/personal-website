import { Page, Text, Card, Collapse, Link } from "@geist-ui/react";
import data from "../data/data.json";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Experience = () => {
  return (
    <Page width="1200px">
      <Header />
      <Card mt={3} justify="center" hovarable>
        <Text h1 style={{ fontSize: 30 }}>
          Experience
        </Text>
        <Text style={{ fontSize: 20 }} s b justify="center">
          Fibrous Finance BackEnd Developer | May, 2024 - Present
        </Text>
        <div></div>
        <Text style={{ fontSize: 20 }} s b justify="center">
          ITU Blockchain Head Of Development | September, 2023 - Present
        </Text>
      </Card>
      <Card mt={1} justify="center" hovarable>
        <Text h2 style={{ fontSize: 30 }}>
          Hackathons
        </Text>
        <Collapse.Group>
          {!data ? (
            <Text>Loading...</Text>
          ) : (
            <p>
              {data.experiences.map((experience) => (
                <Collapse shadow title={experience.title} key={experience.id}>
                  <Text>{experience.body}</Text>
                  <Link target="_blank" color="blue" href={experience.link}>
                    {experience.linkshortcut}
                  </Link>
                </Collapse>
              ))}
            </p>
          )}
        </Collapse.Group>
      </Card>
      <Footer />
    </Page>
  );
};

export default Experience;
