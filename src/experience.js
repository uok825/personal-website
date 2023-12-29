import { Page, Text, Card, Collapse, Link } from "@geist-ui/react";
import data from "./data/data.json";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Experience = () => {
  return (
    <Page width="1200px">
      <Navbar />

      <Card mt={3} justify="center" hovarable>
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
