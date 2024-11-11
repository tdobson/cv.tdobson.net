import { Container, Title, Text, Group, Stack, Badge, Anchor, List, Paper, Grid } from '@mantine/core';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconMapPin } from '@tabler/icons-react';

export function CV() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap="xs">
          <Title order={1} size="h1" c="blue.7">Tim Dobson</Title>
          <Text size="xl" c="dimmed">Technology Leader & Community Builder</Text>
          
          <Group gap="md">
            <Group gap="xs">
              <IconMail size={16} />
              <Anchor href="mailto:email@tdobson.net">email@tdobson.net</Anchor>
            </Group>
            <Anchor href="#">
              <Group gap="xs">
                <IconBrandLinkedin size={16} />
                <Text>LinkedIn</Text>
              </Group>
            </Anchor>
            <Anchor href="#">
              <Group gap="xs">
                <IconBrandGithub size={16} />
                <Text>GitHub</Text>
              </Group>
            </Anchor>
            <Group gap="xs">
              <IconMapPin size={16} />
              <Text>Strines, Greater Manchester</Text>
            </Group>
          </Group>
        </Stack>

        {/* Professional Summary */}
        <Paper withBorder p="md" radius="md">
          <Text>
            Technology leader with 15+ years of experience spanning SaaS development, community building, and strategic growth. 
            Founded and previously chaired The Climbing Clan, successfully implementing digital solutions to measure and drive 
            community impact. Combines deep technical expertise with proven ability to scale services and build inclusive communities. 
            Passionate about using technology to solve real-world challenges and drive social change.
          </Text>
        </Paper>

        {/* Experience */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Core Experience</Title>
          
          {/* XEBIT */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Full-stack Developer - XEBIT LIMITED</Title>
                <Text c="dimmed">March 2022 - Present</Text>
              </Group>
              <List>
                <List.Item>Develop automation solutions helping businesses streamline processes and measure impact</List.Item>
                <List.Item>Build integrations between platforms including Google Sheets and WordPress</List.Item>
                <List.Item>Focus on creating accessible, scalable technical solutions</List.Item>
                <List.Item>Lead implementation of data collection and reporting systems</List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Similar Paper components for other experiences */}
        </Stack>

        {/* Skills */}
        <Grid>
          <Grid.Col span={4}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">Technical Skills</Title>
              <Group gap="xs">
                {['Node.js', 'JavaScript/React', 'Full-stack Development', 'Git', 'System Integration', 'Data Analytics']
                  .map((skill) => (
                    <Badge key={skill} size="lg" variant="light" color="blue">
                      {skill}
                    </Badge>
                  ))}
              </Group>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={4}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">Languages</Title>
              <Group gap="xs">
                <Badge size="lg" variant="light" color="green">English (Native)</Badge>
                <Badge size="lg" variant="light" color="yellow">Russian (Elementary)</Badge>
                <Badge size="lg" variant="light" color="yellow">French (Elementary)</Badge>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
