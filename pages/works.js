import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

const Works = () => (
  <Layout title="Works">
    <Container maxW={"container.md"}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="mirror-code" title="Mirror Code" thumbnail={`/images/works/mirror-code/mirror-code.png`}>
            Collaborative web IDE for pair programming
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="beymart" title="Beymart" thumbnail={`/images/works/b-i.jpg`}>
            An online e-commerce app
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="aau-portal" title="AAU Portal" thumbnail={`/images/works/aauportal/1.jpg`}>
            App for all of Addis Ababa Universities
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="betting-bot" title="Super bet tips" thumbnail={`/images/works/bettingbot/1.jpg`}>
            A telegram bot for betting info
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <p
        style={{
          textAlign: "center",
          margin: "10px",
          fontSize: "25px",
        }}
      >
        More projects and packages on{" "}
        <a
          style={{
            color: "red",
            fontWeight: 900,
            letterSpacing: "0.5px",
          }}
          href="https://github.com/MyoniM"
          target={"_blank"}
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </Container>
  </Layout>
);

export default Works;
