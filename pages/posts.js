import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

const Posts = () => (
  <Layout title="Posts">
    <Container maxW={"container.md"}>
      <Heading as="h3" fontSize={20} mb={4}>
        Blogs
      </Heading>

      <Section delay={0.1}>
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
        <br />
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://blog.devgenius.io/kubernetes-k8-high-level-overview-d4e8ef59de00"
            title="Kubernetes(k8) High-level overview"
            thumbnail={`/images/blog/blogthree.jpg`}
          />
        </SimpleGrid>
      </Section>
      <br />
      <Heading as="h3" fontSize={20} mb={4}>
        Certificates
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href=""
            title="Docker"
            thumbnail={`/images/certificate/dockerbeginner.PNG`}
          />
          <GridItem
            href=""
            title="Ansible"
            thumbnail={`/images/certificate/ansible.png`}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
