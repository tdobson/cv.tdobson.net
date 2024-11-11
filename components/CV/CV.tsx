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

          {/* The Climbing Clan */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Founder & Former Chair - The Climbing Clan</Title>
                <Text c="dimmed">November 2017 - September 2024</Text>
              </Group>
              <List>
                <List.Item>Founded and scaled an inclusive climbing community to become a BMC-affiliated club</List.Item>
                <List.Item>Led comprehensive digital transformation including:
                  <List withPadding>
                    <List.Item>Designed and implemented automated membership management system</List.Item>
                    <List.Item>Created custom impact tracking tools for measuring engagement</List.Item>
                    <List.Item>Built automated communication systems for member retention</List.Item>
                  </List>
                </List.Item>
                <List.Item>Developed data-driven approaches to measure and improve community impact</List.Item>
                <List.Item>Successfully transitioned leadership after building sustainable operational structure</List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Migrating Dragons */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Technical Sales Consultant - Migrating Dragons</Title>
                <Text c="dimmed">April 2018 - March 2022</Text>
              </Group>
              <List>
                <List.Item>Guided technology companies in developing effective growth strategies</List.Item>
                <List.Item>Helped technical organizations bridge the gap between product excellence and market success</List.Item>
                <List.Item>Created and executed sales strategies for SaaS products</List.Item>
                <List.Item>Specialized in helping companies scale beyond initial product-market fit</List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Bytemark */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Head of Sales & Account Management - Bytemark Hosting</Title>
                <Text c="dimmed">November 2010 - September 2016</Text>
              </Group>
              <Stack gap="xs">
                <Text fw={500}>Head of Technical Sales & Account Management (3 years)</Text>
                <List>
                  <List.Item>Led technical sales team, doubling managed customer revenue</List.Item>
                  <List.Item>Managed complex technical hosting projects and customer relationships</List.Item>
                  <List.Item>Conducted user research and product testing through GV-style Design Sprints</List.Item>
                </List>
                <Text fw={500}>Community/Events Marketing (18 months)</Text>
                <List>
                  <List.Item>Managed developer community engagement program</List.Item>
                  <List.Item>Led sponsorship for 24+ technical conferences</List.Item>
                  <List.Item>Built relationships across open source communities</List.Item>
                </List>
              </Stack>
            </Stack>
          </Paper>
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

          <Grid.Col span={4}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">Education</Title>
              <Stack gap="xs">
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>Manchester Grammar School</Text>
                  <Text size="sm" c="dimmed">2001 - 2007</Text>
                </Paper>
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>Cheadle & Marple 6th Form College</Text>
                  <Text size="sm" c="dimmed">2007 - 2009</Text>
                </Paper>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
