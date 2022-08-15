import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Heading,  } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Beymart">
      <Container maxW={"container.md"}>
        <Title>
          Beymart <Badge padding={1}>2022</Badge>
        </Title>
        <P>
          Well, who doesn’t love shopping? Especially when we have online shopping apps that get you BETTER PRODUCTS AT CRAZY DISCOUNTS, right at your
          doorstep! Beymart is an e-commerce app built with the technologies listed below.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>android /iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, NodeJs, GraphQL, MySQL, Firebase</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          Links
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://apkgk.com/com.bey.mart">
              <Badge mr={2}>Android</Badge>
              Android download link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://apps.apple.com/us/app/beymart/id1596305801">
              <Badge mr={2}>iOS</Badge>
              iOS download link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/7.jpg" alt="beymart" />
          <WorkImage src="/images/works/4.jpg" alt="beymart" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/6.jpg" alt="beymart" />
          <WorkImage src="/images/works/5.jpg" alt="beymart" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/3.jpg" alt="beymart" />
          <WorkImage src="/images/works/1.jpg" alt="beymart" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
