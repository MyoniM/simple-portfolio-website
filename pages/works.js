import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="beymart"
            title="Beymart"
            thumbnail={`/images/works/7.jpg`}
          >
            An online grocery delivery service in Addis Ababa from listed
            stores/supermarkets and retailers.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="aau-portal"
            title="AAU Portal"
            thumbnail={`/images/works/aauportal/1.jpg`}
          >
            A simple app for all of Addis Ababa Universities
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="betting-bot"
            title="Super bet tips"
            thumbnail={`/images/works/bettingbot/1.jpg`}
          >
            A simple telegram bot to help you make a better decision while
            betting your money
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
