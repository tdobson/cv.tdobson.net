import { Container, Title, Text, Group, Stack, Badge, Anchor, List, Paper, Grid } from '@mantine/core';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconMapPin, IconPhone } from '@tabler/icons-react';

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
            <Group gap="xs">
              <IconPhone size={16} />
              <Text>01457597007</Text>
            </Group>
            <Anchor href="https://www.linkedin.com/in/tdobson">
              <Group gap="xs">
                <IconBrandLinkedin size={16} />
                <Text>linkedin.com/in/tdobson</Text>
              </Group>
            </Anchor>
            <Anchor href="https://github.com/tdobson">
              <Group gap="xs">
                <IconBrandGithub size={16} />
                <Text>github.com/tdobson</Text>
              </Group>
            </Anchor>
            <Group gap="xs">
              <IconMapPin size={16} />
              <Text>Strines, Greater Manchester, United Kingdom</Text>
            </Group>
          </Group>
        </Stack>

        {/* Professional Summary */}
        <Paper withBorder p="md" radius="md">
          <Text>
            A passionate developer and lifelong learner with a background in Operations and Sysadmin. 
            Experienced in helping technology companies tackle their biggest challenges – particularly in 
            attracting and retaining customers. Founded and led The Climbing Clan and The Caving Crew, 
            two BMC and BCA affiliated clubs, developing several software solutions including neoClan, 
            a second-generation membership check-in system.
          </Text>
          <Text mt="md">
            Brings a unique blend of technical and customer-focused skills from roles spanning Junior 
            JavaScript Developer to Technical Sales Consultant. Particularly adept at integrating systems, 
            automating processes, and ensuring customer success. Currently focused on React with the 
            Mantine framework and Next.js, alongside exploring react-query and advanced git workflows.
          </Text>
          <Text mt="md">
            Outside of tech, an avid rock climber and caving enthusiast, bringing these passions for 
            problem-solving and innovation to technical challenges.
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

        {/* Volunteer Projects */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Volunteer Projects</Title>

          {/* The Caving Crew */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">The Caving Crew</Title>
                <Text c="dimmed">November 2019 - Present</Text>
              </Group>
              <List>
                <List.Item>Setup and grew a BCA-Affiliated Caving Club to above-average size for UK Caving Clubs</List.Item>
                <List.Item>Implemented technical solutions for club management and member engagement</List.Item>
                <List.Item>Associated with The Climbing Clan, sharing resources and community</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Linux</Badge>
                <Badge size="sm">Leadership</Badge>
                <Badge size="sm">Node.js</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Parliamentary Candidate */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Parliamentary Candidate - Pirate Party UK</Title>
                <Text c="dimmed">March 2010 - May 2010</Text>
              </Group>
              <List>
                <List.Item>Represented Manchester Gorton constituency in 2010 General Election</List.Item>
                <List.Item>Coordinated volunteer teams and managed campaign resources</List.Item>
                <List.Item>Engaged with media and handled public speaking engagements</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Leadership</Badge>
                <Badge size="sm">Public Speaking</Badge>
                <Badge size="sm">Press Relations</Badge>
              </Group>
            </Stack>
          </Paper>
        </Stack>

        {/* Programming Projects */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Programming Projects</Title>

          {/* Pieline.net */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Pieline.net</Title>
                <Text c="dimmed">March 2015 - October 2015</Text>
              </Group>
              <Text>Community tech job board for the North West tech community</Text>
              <List>
                <List.Item>Built prototype using Node.js, Bootstrap, and MySQL</List.Item>
                <List.Item>Tested user assumptions about job search and information presentation</List.Item>
                <List.Item>Implemented data-driven improvements based on user feedback</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Node.js</Badge>
                <Badge size="sm">MySQL</Badge>
                <Badge size="sm">JavaScript</Badge>
                <Badge size="sm">Bootstrap</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Dripfeed */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">Dripfeed</Title>
                <Text c="dimmed">October 2013 - November 2013</Text>
              </Group>
              <Text>Financial management tool for responsible spending and saving</Text>
              <List>
                <List.Item>Led marketing strategy for YCombinator application</List.Item>
                <List.Item>Contributed to product development and user acquisition strategy</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Digital Marketing</Badge>
                <Badge size="sm">Product Strategy</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* The Van */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Title order={3} size="h3">The Van Project</Title>
                <Text c="dimmed">June 2015 - February 2020</Text>
              </Group>
              <Text>Full van conversion project with integrated systems</Text>
              <List>
                <List.Item>Designed and implemented complete living space conversion</List.Item>
                <List.Item>Installed electrical, gas, and structural systems</List.Item>
                <List.Item>Documented build process through photography and social media</List.Item>
              </List>
              <Anchor href="http://instagram.com/tdobsonnet" target="_blank">View Build Photos</Anchor>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Project Management</Badge>
                <Badge size="sm">Technical Design</Badge>
                <Badge size="sm">Documentation</Badge>
              </Group>
            </Stack>
          </Paper>
        </Stack>

        {/* Skills */}
        <Grid>
          <Grid.Col span={4}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">Technical Skills</Title>
              <Group gap="xs">
                {[
                  'Node.js',
                  'JavaScript/React',
                  'Bash',
                  'Git',
                  'System Integration',
                  'Linux',
                  'WordPress',
                  'MySQL',
                  'Data Analytics'
                ].map((skill) => (
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
