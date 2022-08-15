import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Heading,  } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="AAU Portal">
      <Container maxW={"container.md"}>
        <Title>
          AAU Portal <Badge padding={1}>2021</Badge>
        </Title>
        <P>
          AAU Portal is an app that is built for all Addis Ababa Universities(Social, Natural, Medical...) aiming to simplify the hustle when it comes
          to accessing the universities official portal. AAU Portal is an app built with the technologies listed below.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, NodeJs</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          Links
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://play.google.com/store/apps/details?id=com.BlueScenes.AAUPortal">
              <Badge mr={2}>Android</Badge>
              Android download link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/aauportal/1.jpg" alt="aau-portal" />
          <WorkImage src="/images/works/aauportal/2.jpg" alt="aau-portal" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/aauportal/3.jpg" alt="aau-portal" />
          <WorkImage src="/images/works/aauportal/4.jpg" alt="aau-portal" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
