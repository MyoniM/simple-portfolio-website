import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Heading,  } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Super Bet tips">
      <Container maxW={"container.md"}>
        <Title>
          Super Bet tips <Badge padding={1}>2022</Badge>
        </Title>
        <P>
          Super betting bot is a simple bot that uses web scraping to fetch data from the internet and display the result in a simplified table look.
          It also gives match insights that helps you make the right decision. Super betting bot is a telegram bot built with the technologies listed
          below.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Telegram bot</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Telegraph, NodeJs, Web scraping</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          Links
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://t.me/ethiopia_betting_tips_bot">
              <Badge mr={2}>Telegram</Badge>
              Bot link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/bettingbot/2.jpg" alt="aau-portal" />
          <WorkImage src="/images/works/bettingbot/3.jpg" alt="aau-portal" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/bettingbot/4.jpg" alt="aau-portal" />
          <WorkImage src="/images/works/bettingbot/5.jpg" alt="aau-portal" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
