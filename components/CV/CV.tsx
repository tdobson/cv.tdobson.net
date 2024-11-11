import React from 'react';
import { Container, Title, Text, Group, Stack, Badge, Anchor, List, Paper, Grid, Avatar } from '@mantine/core';
import { 
  IconMail, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconMapPin, 
  IconPhone, 
  IconCode, 
  IconUsers, 
  IconBuildingStore, 
  IconCloud, 
  IconRocket, 
  IconChartBar, 
  IconServer, 
  IconBroadcast, 
  IconBrandReact, 
  IconCalculator, 
  IconBuildingCommunity, 
  IconCoin,
  IconMountain, 
  IconSchool, 
  IconUserCheck,
  IconCamper 
} from '@tabler/icons-react';

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
              <Anchor href="mailto:cv@tdobson.net">cv@tdobson.net</Anchor>
            </Group>
            <Group gap="xs">
              <IconPhone size={16} />
              <Anchor href="tel:01457597007">01457597007</Anchor>
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
            A technology leader with deep roots in operations and systems administration, now specializing in developing solutions that bridge technical excellence with business success. Having founded and led two successful sports clubs - The Climbing Clan and The Caving Crew - while developing their technical infrastructure, including the neoClan membership system, focus is firmly on using technical innovation to support practical business needs.
          </Text>
          <Text mt="md">
            Professional experience spans from hands-on Linux systems administration to technical sales leadership, with particular expertise in developing customer-centric solutions and driving business growth. Recent work focuses on React development using the Mantine framework and Next.js, while maintaining strong capabilities in systems integration and process automation.
          </Text>
          <Text mt="md">
            Active participation in rock climbing and caving brings a unique perspective to technical challenges, combining outdoor leadership experience with systematic problem-solving approaches.
          </Text>
        </Paper>

        {/* Experience */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Core Experience</Title>

          {/* XEBIT */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconCode size={24} color="#228BE6" />
                  <Title order={3} size="h3">Full-stack Developer - XEBIT LIMITED</Title>
                </Group>
                <Text c="dimmed">March 2022 - Present</Text>
              </Group>
              <List>
                <List.Item>Develop serverless automation solutions on AWS helping businesses streamline processes and measure impact</List.Item>
                <List.Item>Build integrations between platforms including Google Sheets and WordPress</List.Item>
                <List.Item>Focus on creating accessible, scalable technical solutions</List.Item>
                <List.Item>Lead implementation of data collection and reporting systems</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Full-stack Development</Badge>
                <Badge size="sm">AWS</Badge>
                <Badge size="sm">React</Badge>
                <Badge size="sm">WordPress</Badge>
                <Badge size="sm">System Integration</Badge>
                <Badge size="sm">Google Apps Script</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* The Climbing Clan */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconUsers size={24} color="#40C057" />
                  <Title order={3} size="h3">Founder & Former Chair - The Climbing Clan</Title>
                </Group>
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
              <Group gap="xs" mt="xs">
                <Badge size="sm">Community Building</Badge>
                <Badge size="sm">Digital Transformation</Badge>
                <Badge size="sm">Leadership</Badge>
                <Badge size="sm">Process Automation</Badge>
                <Badge size="sm">Change Management</Badge>
                <Badge size="sm">WooCommerce</Badge>
                <Badge size="sm">WordPress</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Migrating Dragons */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconBuildingStore size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">Technical Sales Consultant - Migrating Dragons</Title>
                </Group>
                <Text c="dimmed">April 2018 - March 2022</Text>
              </Group>
              <List>
                <List.Item>Guided technology companies in developing effective growth strategies</List.Item>
                <List.Item>Helped technical organizations bridge the gap between product excellence and market success</List.Item>
                <List.Item>Created and executed sales strategies for SaaS products</List.Item>
                <List.Item>Specialized in helping companies scale beyond initial product-market fit</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Technical Sales</Badge>
                <Badge size="sm">Business Strategy</Badge>
                <Badge size="sm">SaaS</Badge>
                <Badge size="sm">Growth Strategy</Badge>
                <Badge size="sm">Product Strategy</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Brightbox */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconCloud size={24} color="#FA5252" />
                  <Title order={3} size="h3">Customer Success Manager - Brightbox</Title>
                </Group>
                <Text c="dimmed">October 2018 - October 2019</Text>
              </Group>
              <List>
                <List.Item>Managed developer relations for cloud services platform</List.Item>
                <List.Item>Facilitated platform testing and feedback collection for Kubernetes integration</List.Item>
                <List.Item>Supported developers in server deployment and application management</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Developer Relations</Badge>
                <Badge size="sm">Cloud Infrastructure</Badge>
                <Badge size="sm">Kubernetes</Badge>
                <Badge size="sm">Customer Success</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Guardian Angel */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconRocket size={24} color="#FCC419" />
                  <Title order={3} size="h3">User Research Specialist - Guardian Angel</Title>
                </Group>
                <Text c="dimmed">February 2019 - July 2019</Text>
              </Group>
              <List>
                <List.Item>Conducted user research for digital memorial platform</List.Item>
                <List.Item>Gathered and analyzed feedback from funeral directors</List.Item>
                <List.Item>Contributed to product development and feature prioritization</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">User Research</Badge>
                <Badge size="sm">Product Development</Badge>
                <Badge size="sm">Stakeholder Management</Badge>
                <Badge size="sm">Requirements Gathering</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Formisimo */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconChartBar size={24} color="#228BE6" />
                  <Title order={3} size="h3">Senior Account Manager - Formisimo</Title>
                </Group>
                <Text c="dimmed">July 2017 - April 2018</Text>
              </Group>
              <List>
                <List.Item>Led enterprise customer onboarding for form analytics SaaS platform</List.Item>
                <List.Item>Managed ongoing customer relationships and platform adoption</List.Item>
                <List.Item>Facilitated smooth integration of analytics tools into client workflows</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Enterprise Sales</Badge>
                <Badge size="sm">Account Management</Badge>
                <Badge size="sm">SaaS</Badge>
                <Badge size="sm">Analytics</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Bytemark */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconServer size={24} color="#40C057" />
                  <Title order={3} size="h3">Head of Sales & Account Management - Bytemark Hosting</Title>
                </Group>
                <Text c="dimmed">November 2010 - September 2016</Text>
              </Group>
              <Stack gap="xs">
                <Text fw={500}>Head of Technical Sales & Account Management (3 years)</Text>
                <List>
                  <List.Item>Led technical sales team as "human API", doubling managed customer revenue</List.Item>
                  <List.Item>Managed complex technical hosting projects and customer relationships</List.Item>
                  <List.Item>Developed expertise in requirement gathering, proposal writing, and negotiation</List.Item>
                  <List.Item>Conducted user research and product testing through GV-style Design Sprints</List.Item>
                </List>

                <Text fw={500}>Community/Events Marketing (18 months)</Text>
                <List>
                  <List.Item>Managed and attended 24+ technical conferences annually</List.Item>
                  <List.Item>Led extensive open source project sponsorship programme</List.Item>
                  <List.Item>Built relationships across developer communities</List.Item>
                </List>

                <Text fw={500}>Systems Administrator (18 months)</Text>
                <List>
                  <List.Item>Supported managed customers' Linux-based hosting solutions</List.Item>
                  <List.Item>Performed preventative maintenance and migration assistance</List.Item>
                  <List.Item>Developed expertise in Linux technology stacks and debugging</List.Item>
                </List>
                <Group gap="xs" mt="xs">
                  <Badge size="sm">Technical Sales Leadership</Badge>
                  <Badge size="sm">Linux Administration</Badge>
                  <Badge size="sm">Community Management</Badge>
                  <Badge size="sm">Event Marketing</Badge>
                  <Badge size="sm">Open Source</Badge>
                </Group>
              </Stack>
            </Stack>
          </Paper>

          {/* DMC */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconPhone size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">Systems Engineer - Data Messaging & Communications Ltd</Title>
                </Group>
                <Text c="dimmed">November 2008 - October 2010</Text>
              </Group>
              <List>
                <List.Item>Provided first-line VoIP and Asterisk support on Debian Linux systems</List.Item>
                <List.Item>Implemented ticket tracking and network monitoring systems</List.Item>
                <List.Item>Automated provisioning processes to improve efficiency</List.Item>
                <List.Item>Specialized in troubleshooting SIP and VoIP over consumer ADSL</List.Item>
                <List.Item>Developed expertise in low-level networking (OSI Layer 3 and 4)</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">VoIP</Badge>
                <Badge size="sm">Linux Systems</Badge>
                <Badge size="sm">Network Engineering</Badge>
                <Badge size="sm">Technical Support</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* BBC */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconBroadcast size={24} color="#FA5252" />
                  <Title order={3} size="h3">Contracted Xen Sysadmin - BBC Backstage</Title>
                </Group>
                <Text c="dimmed">February 2009 - August 2010</Text>
              </Group>
              <List>
                <List.Item>Managed Linux-based R&D VM cluster "Playground" supporting BBC developers</List.Item>
                <List.Item>Administered 50+ guest VMs across 6-8 Xen hypervisor hosts</List.Item>
                <List.Item>Provided technical support and machine provisioning for development teams</List.Item>
                <List.Item>Maintained mixed Centos and Debian Linux environment</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Virtualization</Badge>
                <Badge size="sm">Linux Administration</Badge>
                <Badge size="sm">Infrastructure Management</Badge>
                <Badge size="sm">Developer Support</Badge>
              </Group>
            </Stack>
          </Paper>
        </Stack>

        {/* Programming Projects */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Selected Programming Portfolio</Title>

          {/* neoClan */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconBrandReact size={24} color="#61DAFB" />
                  <Title order={3} size="h3">neoClan</Title>
                </Group>
                <Text c="dimmed">2023 - Present</Text>
              </Group>
              <Text>Membership check-in system for The Climbing Clan and The Caving Crew</Text>
              <List>
                <List.Item>Built mobile-first React application for membership management</List.Item>
                <List.Item>Integrated with WordPress and WooCommerce for seamless user experience</List.Item>
                <List.Item>Improved operational efficiency through custom API development</List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://neoclan.climbingclan.com/" target="_blank">Live Project</Anchor>
                <Anchor href="https://github.com/tdobson/neoclan" target="_blank">GitHub</Anchor>
              </Group>
              <Group gap="xs" mt="xs">
                <Badge size="sm">React</Badge>
                <Badge size="sm">Mantine</Badge>
                <Badge size="sm">WordPress</Badge>
                <Badge size="sm">WooCommerce</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Materials Calculator */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconCalculator size={24} color="#40C057" />
                  <Title order={3} size="h3">Materials Calculator</Title>
                </Group>
                <Text c="dimmed">2023</Text>
              </Group>
              <Text>Solar PV materials calculator for streamlined build planning</Text>
              <List>
                <List.Item>Developed React-based calculator to replace slow spreadsheet solution</List.Item>
                <List.Item>Reduced calculation time from 5-10 minutes to seconds</List.Item>
                <List.Item>Implemented familiar interface for easy user adoption</List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://rastapopoulos.pages.dev/bom" target="_blank">Live Project</Anchor>
                <Anchor href="https://github.com/tdobson/rastapopoulos" target="_blank">GitHub</Anchor>
              </Group>
              <Group gap="xs" mt="xs">
                <Badge size="sm">React</Badge>
                <Badge size="sm">Mantine</Badge>
                <Badge size="sm">JavaScript</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Pieline.net */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconBuildingCommunity size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">Pieline.net</Title>
                </Group>
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
                <Group>
                  <IconCoin size={24} color="#FCC419" />
                  <Title order={3} size="h3">Dripfeed</Title>
                </Group>
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
        </Stack>

        {/* Volunteer Projects */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Volunteer Projects</Title>

          {/* The Caving Crew */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconMountain size={24} color="#228BE6" />
                  <Title order={3} size="h3">The Caving Crew</Title>
                </Group>
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

          {/* DFEY */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconSchool size={24} color="#40C057" />
                  <Title order={3} size="h3">Digital Freedom in Education & Youth - North West</Title>
                </Group>
                <Text c="dimmed">June 2008 - April 2012</Text>
              </Group>
              <Text>Co-founded initiative to increase youth participation in technology through accessible event experiences.</Text>
              <List>
                <List.Item>Organized youth delegations to major tech events:
                  <List withPadding>
                    <List.Item>2morro Festival (London)</List.Item>
                    <List.Item>Young Rewired State - London & Manchester centres</List.Item>
                  </List>
                </List.Item>
                <List.Item>Delivered keynote presentations at technology conferences:
                  <List withPadding>
                    <List.Item>FutureEverything (Manchester)</List.Item>
                    <List.Item>OpenTech (London)</List.Item>
                    <List.Item>NeoN Digital Arts Festival (Dundee)</List.Item>
                  </List>
                </List.Item>
                <List.Item>Led community outreach through Linux User Groups across Northern England</List.Item>
              </List>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Public Speaking</Badge>
                <Badge size="sm">Event Organization</Badge>
                <Badge size="sm">Youth Engagement</Badge>
                <Badge size="sm">Technology Education</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Parliamentary Candidate */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconUserCheck size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">Parliamentary Candidate - Pirate Party UK</Title>
                </Group>
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

          {/* The Van */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group>
                  <IconCamper size={24} color="#FA5252" />
                  <Title order={3} size="h3">The Van Project</Title>
                </Group>
                <Text c="dimmed">June 2015 - February 2020</Text>
              </Group>
              <Text>Full van conversion project with integrated systems</Text>
              <List>
                <List.Item>Designed and implemented complete living space conversion using Lean and Agile principles</List.Item>
                <List.Item>Installed electrical, gas, and structural systems</List.Item>
                <List.Item>Documented build process through photography and social media</List.Item>
              </List>
              <Anchor href="http://instagram.com/tim.dobson.uk" target="_blank">View Build Photos</Anchor>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Project Management</Badge>
                <Badge size="sm">Technical Design</Badge>
                <Badge size="sm">Documentation</Badge>
                <Badge size="sm">Lean</Badge>
                <Badge size="sm">Agile</Badge>
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
                  'JavaScript/TypeScript',
                  'React',
                  'Git',
                  'Debian Linux',
                  'WordPress',
                  'MySQL',
                  'Next.js',
                  'Serverless',
                  'Scrum'
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
                <Badge size="lg" variant="light" color="yellow">French (Semi-fluent)</Badge>
                <Badge size="lg" variant="light" color="yellow">Russian (Some understanding)</Badge>
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
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>16 Hour Outdoor First Aid</Text>
                  <Text size="sm" c="dimmed">Current</Text>
                </Paper>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* References */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">Selected References</Title>
          <Grid>
            {/* Mark Taylor */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper withBorder p="md" radius="md">
                <Stack gap="xs">
                  <Group>
                    <Avatar src="/testimonials/mark.jpeg" alt="Mark Taylor" size="lg" radius="xl" />
                    <div>
                      <Text fw={500}>Mark Taylor</Text>
                      <Text size="sm" c="dimmed">Chief Executive Officer at Sirius Open Source Inc.</Text>
                    </div>
                  </Group>
                  <Text fz="sm" fs="italic">
                    "I've known Tim for years as he has progressed in the Open Source community ... Tim is always available, always helpful, and has made doing great business ... a pleasure."
                  </Text>
                  <Anchor href="https://www.siriusopensource.com/en-uk/about/meet-the-team" size="sm" target="_blank">
                    View Profile
                  </Anchor>
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Steph Gray */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper withBorder p="md" radius="md">
                <Stack gap="xs">
                  <Group>
                    <Avatar src="/testimonials/steph.jpeg" alt="Steph Gray" size="lg" radius="xl" />
                    <div>
                      <Text fw={500}>Steph Gray</Text>
                      <Text size="sm" c="dimmed">Managing Director at Helpful Digital</Text>
                    </div>
                  </Group>
                  <Text fz="sm" fs="italic">
                    "I've have known Tim through events I've organised that he's supported over five years or more. He's the friendly, approachable face of what can be quite a daunting world to folks like me from outside the natural world of Linux hosting and sysadminry."
                  </Text>
                  <Anchor href="https://stephgray.com/" size="sm" target="_blank">
                    View Profile
                  </Anchor>
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Ian Forrester */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper withBorder p="md" radius="md">
                <Stack gap="xs">
                  <Group>
                    <Avatar src="/testimonials/ian.jpeg" alt="Ian Forrester" size="lg" radius="xl" />
                    <div>
                      <Text fw={500}>Ian Forrester</Text>
                      <Text size="sm" c="dimmed">Senior Firestarter at BBC R&D</Text>
                    </div>
                  </Group>
                  <Text fz="sm" fs="italic">
                    "Tim is a very reliable freelancer who ... has a wealth of knowledge under his belt. He's very reasonable and flexible when the job requires it. He also learns very quickly and uses the range of skills he naturally picks up on every job he takes on. Tim's an all round superstar."
                  </Text>
                  <Anchor href="https://www.cubicgarden.com" size="sm" target="_blank">
                    View Profile
                  </Anchor>
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Dan Morris */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper withBorder p="md" radius="md">
                <Stack gap="xs">
                  <Group>
                    <Avatar src="/testimonials/dan.jpeg" alt="Daniel Morris" size="lg" radius="xl" />
                    <div>
                      <Text fw={500}>Daniel Morris</Text>
                      <Text size="sm" c="dimmed">Private Sector Engineering Leader</Text>
                    </div>
                  </Group>
                  <Text fz="sm" fs="italic">
                    "I had the luck to have Tim sysadmin our apps, absolutely saved the day repeatedly and always knew what to do!"
                  </Text>
                  <Anchor href="https://www.linkedin.com/in/danieljohnmorris/" size="sm" target="_blank">
                    View Profile
                  </Anchor>
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Matt Jukes */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper withBorder p="md" radius="md">
                <Stack gap="xs">
                  <Group>
                    <Avatar src="/testimonials/matt.jpeg" alt="Matt Jukes" size="lg" radius="xl" />
                    <div>
                      <Text fw={500}>Matt Jukes</Text>
                      <Text size="sm" c="dimmed">Public Sector Head of Product</Text>
                    </div>
                  </Group>
                  <Text fz="sm" fs="italic">
                    "I'd met Tim at various barcamps etc and had always been impressed with his know-how and community spirit so when I was looking for a new hosting company for the Medical Research Council he was a big factor in us choosing Bytemark. He was a great account manager for us - always helpful and on the ball."
                  </Text>
                  <Anchor href="https://www.linkedin.com/in/mjukes/" size="sm" target="_blank">
                    View Profile
                  </Anchor>
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Steve Kemp */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper withBorder p="md" radius="md">
                <Stack gap="xs">
                  <Group>
                    <Avatar src="/testimonials/steve.jpeg" alt="Steve Kemp" size="lg" radius="xl" />
                    <div>
                      <Text fw={500}>Steve Kemp</Text>
                      <Text size="sm" c="dimmed">Senior GNU/Linux Systems Administrator</Text>
                    </div>
                  </Group>
                  <Text fz="sm" fs="italic">
                    "Tim was and is a very competent and thorough administrator, with a good feel for the kind of jobs which would be required to host any particular site. Taking enquiries and turning those into requirements for hosting was definitely something he could do with his eyes closed, and something he could do well too."
                  </Text>
                  <Anchor href="https://steve.fi/" size="sm" target="_blank">
                    View Profile
                  </Anchor>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>

        <Text c="dimmed" ta="center" mt="xl">More references available upon request</Text>

        <Paper withBorder p="md" radius="md" mt="xl">
          <Group justify="center" gap="xl">
            <Group gap="xs">
              <IconMail size={16} />
              <Anchor href="mailto:cv@tdobson.net">cv@tdobson.net</Anchor>
            </Group>
            <Group gap="xs">
              <IconPhone size={16} />
              <Anchor href="tel:01457597007">01457597007</Anchor>
            </Group>
            <Group gap="xs">
              <IconMapPin size={16} />
              <Text>Strines, Greater Manchester, United Kingdom</Text>
            </Group>
          </Group>
        </Paper>
      </Stack>
    </Container>
  );
}
