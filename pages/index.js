import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Tag,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoGithub, IoMail, IoPhonePortrait } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { Image } from "@chakra-ui/react";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a full-stack developer and DevOps engineer!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yonatan Merkebu
          </Heading>
          <p>Senior Software Engineer / Artist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a full-stack developer and DevOps Engineer based in Addis Ababa
          with a passion for learning new stuff every day. <br /> I am
          experienced Software Developer adept in bringing forth expertise in
          design, installation, testing and maintenance of software systems.
          Proficient in various platforms and languages. Experienced with the
          latest development tools and procedures. Able to effectively
          self-manage during independent projects, as well as collaborate as
          part of a productive team.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <div>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            HTML /CSS /Javascript
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            Bootstrap
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            Ant Design
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            Typescript
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>ReactJs</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>NextJs</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>Flutter</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            Firebase
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>NodeJS</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            PostgreSQL
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>MySQL</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>MongoDB</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            REST API
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>GraphQL</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>DevOps</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>Docker</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>Jenkins</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>Ansible</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>Puppet</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>Shef</Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            Terraform
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>
            Kubernetes
          </Tag>
          <Tag style={{ marginRight: "5px", marginBottom: "5px" }}>AWS</Tag>
        </div>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Hawassa, Ethiopia.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed Bachelors degree in Software Engineering at Addis Ababa
          University
        </BioSection>
        <BioSection>
          <BioYear>2021 to 2022</BioYear>
          Worked at SkyKeys consultancy
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working at Beymart e-commerce
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, {/* <Link href="/" target="_blank"> */}
          Drawing
          {/* </Link> */}, Video games, Programming , Learning new stuff
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MyoniM" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MyoniM
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
              se.yonatan.merkebu@gmail.com
            </Button>
          </ListItem>

          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoPhonePortrait />}
            >
              0967657294
            </Button>
          </ListItem>

          <ListItem>
            <Link href="https://t.me/Y00NII" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<BsTelegram />}
              >
                @Y00NII
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
