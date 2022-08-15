import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Heading } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Mirror Code">
      <Container maxW={"container.md"}>
        <Title>
          Mirror Code <Badge padding={1}>2022</Badge>
        </Title>
        <P>Code, learn, grow together with Mirror Code collaborative web IDE</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NodeJs, Socket.io, Github API, Firebase</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          Links
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://mirror-code.web.app/">
              <Badge mr={2}>Web</Badge>
              Web app link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/works/mirror-code/demo.png" alt="mirror-code" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
