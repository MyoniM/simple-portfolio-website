import NextLink from 'next/link';
import { Link, Container, Heading, Box, Tag, Button, List, ListItem, useColorModeValue, chakra, SimpleGrid, useToast } from '@chakra-ui/react';

import { GridItem } from '../components/grid-item';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoGithub, IoMail, IoPhonePortrait } from 'react-icons/io5';
import { BsTelegram, BsLinkedin, BsMedium } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => {
  const toast = useToast();
  const showToast = (mssg) => {
    toast({
      title: mssg,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
          SWE | ALGO EXPERT | SYSTEMS DESIGNER | JUNIOR DEVOPS ENGINEER
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Yonatan Merkebu
            </Heading>
            <p>Inspired by the fear of being basic!</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
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
              <ProfileImage src="/images/me.jpg" alt="Profile image" borderRadius="full" width="100%" height="100%" />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I am a hard-working and driven individual who is not afraid to face a challenge. I am skilled in programming languages such as Java,
            Javascript, Typescript, and Python, and have a strong understanding of data structures, algorithms, and computer science principles. I
            have experience working with software development tools and environments and am proficient in debugging and troubleshooting code. I am a
            team player with strong communication skills and a customer-focused mindset and am committed to delivering high-quality work that meets
            the needs of users and stakeholders.
            <br />
            <br />
            Tech skills:
            <br />
            - Proficiency with programming languages, such as Javascript, Typescript, Python
            <br />
            - Knowledge of data structures, algorithms, and computer science principles
            <br />
            - Experience with software development tools and environments, version control systems, and build automation tools
            <br />
            - Familiarity with software testing and debugging techniques
            <br />
            - Experience with database design and management
            <br />
            - Knowledge of system design
            <br />
            <br />
            Soft skills:
            <br />
            - Strong problem-solving and analytical skills
            <br />
            - Good communication skills and the ability to work effectively in a team
            <br />
            - Attention to detail and ability to deliver high-quality work
            <br />
            - Time management and organization skills
            <br />
            - Ability to learn and adapt to new technologies and methodologies
            <br />
            - Customer-focused mindset and ability to understand and address user needs
            <br />
            - Creativity and ability to generate new ideas and approaches to solving problems
            <br />
            <br />
            As a software engineer, my long-term career goal is to become an expert in a specific area of software development, such as backend
            development, systems design, or the cloud. I am also interested in eventually taking on a leadership role and mentoring other team
            members.
            <br />
            <br />
            In the short term, I am focused on improving my technical skills and staying up-to-date on the latest technologies and best practices.
            Ultimately, I want to use my skills and knowledge to positively impact the world by developing innovative and valuable software solutions.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink target="_blank" href="https://github.com/MyoniM" scroll={false}>
              <Button leftIcon={<IoLogoGithub />} colorScheme="teal">
                My Github
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            3 reasons why you should hire me
          </Heading>
          <Paragraph>
            The first is that I can design cutting-edge solutions to your challenges because I have a thorough understanding of the newest tools and
            programming languages. For many occupations, my qualifications, traits, and experience are a strong match. Additionally, you won&apos;t need to
            waste your valuable time training me because I can learn and grasp things so quickly.
            <br />
            <br />
            The second reason is that I am not only knowledgeable in the fields I work in. I am also quite knowledgeable in disciplines outside of my
            own, and I think that will benefit my team and speed up our progress.
            <br />
            <br />
            The third factor is that I always assume responsibility for my own professional progress. I&apos;ll continue to develop and get better at the
            job.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <div>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>OOP</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Microservice</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Systems Design</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Design Patterns</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Algorithms</Tag>
            <br />
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>HTML /CSS /Javascript</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Typescript</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Python</Tag>
            <br />
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>ReactJs</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>NextJs</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>NodeJS</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Flutter</Tag>
            <br />
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Firebase</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>PostgreSQL</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>MongoDB</Tag>
            <br />
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>REST API</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>GraphQL</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Web Scraping</Tag>
            <br />
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>AWS</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>GCP</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Docker</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>Kubernetes</Tag>
            <Tag style={{ marginRight: '5px', marginBottom: '5px' }}>DevOps</Tag>
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
            <BioYear>Present</BioYear>
            Studying Software Engineering at Addis Ababa University.
          </BioSection>
          {/* <BioSection>
            <BioYear>2021 to 2022</BioYear>
            Worked at SkyKeys consultancy
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2022</BioYear>
            Worked at Beymart e-commerce
          </BioSection> */}
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
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @MyoniM
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <CopyToClipboard text="se.yonatan.merkebu@gmail.com" onCopy={() => showToast('Copied Email')}>
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                  se.yonatan.merkebu@gmail.com
                </Button>
              </CopyToClipboard>
            </ListItem>

            <ListItem>
              <CopyToClipboard text="0967657294" onCopy={() => showToast('Copied Phone number')}>
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoPhonePortrait />}>
                  0967657294
                </Button>
              </CopyToClipboard>
            </ListItem>

            <ListItem>
              <Link href="https://t.me/Y00NII" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<BsTelegram />}>
                  @Y00NII
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://yonatan-merkebu.medium.com" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<BsMedium />}>
                  Medium
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/yonatan-merkebu-16a633182" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<BsLinkedin />}>
                  Linked In
                </Button>
              </Link>
            </ListItem>
          </List>
          <br />
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://blog.devgenius.io/advanced-docker-docker-storage-drivers-and-file-systems-81a5340c0761"
              title="Advanced Docker — Docker storage drivers and file systems"
              thumbnail={`/images/blog/blogtwo.jpg`}
            />
            <GridItem
              href="https://yonatan-merkebu.medium.com/docker-for-the-absolute-beginner-8c6dbcd71e4b"
              title="Docker for the absolute beginner"
              thumbnail={`/images/blog/blogone.jpg`}
            />
          </SimpleGrid>
          <br />
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://blog.devgenius.io/kubernetes-k8-high-level-overview-d4e8ef59de00"
              title="Kubernetes(k8s) High-level overview"
              thumbnail={`/images/blog/blogthree.jpg`}
            />
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                More posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
