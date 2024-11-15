import testimonials from '../../config/testimonials.json';
import {
  Anchor,
  Avatar,
  Badge,
  Container,
  Grid,
  Group,
  Loader,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandReact,
  IconBroadcast,
  IconBuildingCommunity,
  IconBuildingStore,
  IconCalculator,
  IconCamper,
  IconChartBar,
  IconCloud,
  IconCode,
  IconCoin,
  IconMail,
  IconMapPin,
  IconMountain,
  IconPhone,
  IconRocket,
  IconSchool,
  IconServer,
  IconUserCheck,
  IconUsers,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

function useProtectedEmail() {
  const [email, setEmail] = useState<string>('Loading...');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const computeEmail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Add initial delay to ensure loading state is visible
        await new Promise(resolve => setTimeout(resolve, 800));

        const emailParts = ['cv', '@', 'tdobson', '.', 'net'];
        const MAX_ATTEMPTS = 1000000; // Prevent infinite loops
        const DIFFICULTY = 4; // Adjust this to change how hard the work is

        // Proof of work function
        const findProofOfWork = async (difficulty: number): Promise<string> => {
          const target = '0'.repeat(difficulty); // e.g., "000" for difficulty 3
          let nonce = 0;

          // Create a function to get hash
          const getHash = async (text: string) => {
            const encoder = new TextEncoder();
            const data = encoder.encode(text);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          };

          while (true) {
            if (nonce > MAX_ATTEMPTS) {
              throw new Error('Failed to find proof of work in reasonable time');
            }

            // Check every 100 iterations if component is still mounted
            if (nonce % 100 === 0) {
              await new Promise(resolve => setTimeout(resolve, 0));
            }

            const attempt = `${emailParts.join('')}:${nonce}`;
            const hash = await getHash(attempt);

            if (hash.startsWith(target)) {
              return emailParts.join('');
            }

            nonce++;
          }
        };

        // Find proof of work with specified difficulty
        const assembled = await findProofOfWork(DIFFICULTY);
        setEmail(assembled);

      } catch (err) {
        setError('Failed to compute email. Please try again.');
        setEmail('Error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    computeEmail();
  }, []);

  return { email, isLoading, error };
}

function ProtectedEmail({ isLoading, email, error }: {
  isLoading: boolean;
  email: string;
  error: string | null;
}) {
  if (error) {
    return (
      <Group gap={4}>
        <IconMail size={16} />
        <Text span c="red">
          {error}
        </Text>
      </Group>
    );
  }

  if (isLoading) {
    return (
      <Group gap={4}>
        <IconMail size={16} />
        <Text span>
          <Loader size="xs" /> Anti-spam shield ...
        </Text>
      </Group>
    );
  }

  return (
    <Group gap={4}>
      <IconMail size={16} />
      <Anchor href={`mailto:${email}`}>{email}</Anchor>
    </Group>
  );
}

export function CV() {
  const { email, isLoading, error } = useProtectedEmail();
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap="xs">
          <Title order={1} size="h1" c="blue.7">
            Tim Dobson
          </Title>
          <Text size="xl" c="dimmed">
            Technology Leader & Community Builder
          </Text>

          <Group gap="md">
            <ProtectedEmail isLoading={isLoading} email={email} error={error} />
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
              <Text>Strines, Manchester, UK</Text>
            </Group>
          </Group>
        </Stack>

        {/* Professional Summary */}
        <Paper withBorder p="md" radius="md">
          <Text>
            I am a technology leader with deep roots in operations and systems administration, now
            specializing in developing solutions that help people get things done.
            I have founded and led two successful sports clubs - The Climbing Clan and The
            Caving Crew - and scaled them using self-deployed digital infrastructure.

          </Text>
          <Text mt="md">
            My professional experience spans from hands-on Linux systems administration to technical
            sales leadership. Recently I've been focusing on React development using the Next.js and Mantine
            framework while keeping in mind the business outcomes I'm keen for my code to deliver.
          </Text>
          <Text mt="md">
            Through my rock climbing and caving, I combine outdoor leadership experience with technical challenges to deliver
            solve problems in systematic ways.
          </Text>
        </Paper>

        {/* Experience */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">
            Core Experience
          </Title>

          {/* XEBIT */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group wrap="nowrap">
                  <IconCode size={24} color="#228BE6" />
                  <Title order={3} size="h3">
                    Full-stack Developer - Xebit Limited
                  </Title>
                </Group>
                <Text c="dimmed">March 2022 - Present</Text>
              </Group>
              <List>
                <List.Item>
                  I develop serverless automation solutions on AWS helping businesses streamline
                  processes and measure impact
                </List.Item>
                <List.Item>
                  I build integrations between platforms including Google Sheets and WordPress
                </List.Item>
                <List.Item>I focus on creating accessible, scalable technical solutions</List.Item>
                <List.Item>
                  I lead implementation of data collection and reporting systems
                </List.Item>
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
                <Group wrap="nowrap">
                  <IconUsers size={24} color="#40C057" />
                  <Title order={3} size="h3">
                    Founder & Former Chair - The Climbing Clan
                  </Title>
                </Group>
                <Text c="dimmed">November 2017 - September 2024</Text>
              </Group>
              <List>
                <List.Item>
                  Founded and scaled an inclusive climbing community to become a BMC-affiliated club
                </List.Item>
                <List.Item>
                  Led comprehensive digital transformation including:
                  <List withPadding>
                    <List.Item>
                      Designed and implemented automated membership management system
                    </List.Item>
                    <List.Item>
                      Created custom impact tracking tools for measuring engagement
                    </List.Item>
                    <List.Item>
                      Built automated communication systems for member retention
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  Developed data-driven approaches to measure and improve community impact
                </List.Item>
                <List.Item>
                  Successfully transitioned leadership after building sustainable operational
                  structure
                </List.Item>
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
                <Group wrap="nowrap">
                  <IconBuildingStore size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">
                    Technical Sales Consultant - Migrating Dragons
                  </Title>
                </Group>
                <Text c="dimmed">April 2018 - March 2022</Text>
              </Group>
              <List>
                <List.Item>
                  Guided technology companies in developing effective growth strategies
                </List.Item>
                <List.Item>
                  Helped technical organizations bridge the gap between product excellence and
                  market success
                </List.Item>
                <List.Item>Created and executed sales strategies for SaaS products</List.Item>
                <List.Item>
                  Specialized in helping companies scale beyond initial product-market fit
                </List.Item>
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
                <Group wrap="nowrap">
                  <IconCloud size={24} color="#FA5252" />
                  <Title order={3} size="h3">
                    Customer Success Manager - Brightbox
                  </Title>
                </Group>
                <Text c="dimmed">October 2018 - October 2019</Text>
              </Group>
              <List>
                <List.Item>Managed developer relations for cloud services platform</List.Item>
                <List.Item>
                  Facilitated platform testing and feedback collection for Kubernetes integration
                </List.Item>
                <List.Item>
                  Supported developers in server deployment and application management
                </List.Item>
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
                <Group wrap="nowrap">
                  <IconRocket size={24} color="#FCC419" />
                  <Title order={3} size="h3">
                    User Research Specialist - Guardian Angel
                  </Title>
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
                <Group wrap="nowrap">
                  <IconChartBar size={24} color="#228BE6" />
                  <Title order={3} size="h3">
                    Senior Account Manager - Formisimo
                  </Title>
                </Group>
                <Text c="dimmed">July 2017 - April 2018</Text>
              </Group>
              <List>
                <List.Item>
                  Led enterprise customer onboarding for form analytics SaaS platform
                </List.Item>
                <List.Item>Managed ongoing customer relationships and platform adoption</List.Item>
                <List.Item>
                  Facilitated smooth integration of analytics tools into client workflows
                </List.Item>
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
                <Group wrap="nowrap">
                  <IconServer size={24} color="#40C057" />
                  <Title order={3} size="h3">
                    Head of Sales & Account Management - Bytemark Hosting
                  </Title>
                </Group>
                <Text c="dimmed">November 2010 - September 2016</Text>
              </Group>
              <Stack gap="xs">
                <Text fw={500}>Head of Technical Sales & Account Management (3 years)</Text>
                <List>
                  <List.Item>
                    Led technical sales team as "human API", doubling managed customer revenue
                  </List.Item>
                  <List.Item>
                    Managed complex technical hosting projects and customer relationships
                  </List.Item>
                  <List.Item>
                    Developed expertise in requirement gathering, proposal writing, and negotiation
                  </List.Item>
                  <List.Item>
                    Conducted user research and product testing through GV-style Design Sprints
                  </List.Item>
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
                  <List.Item>
                    Developed expertise in Linux technology stacks and debugging
                  </List.Item>
                </List>
                <Group gap="xs" mt="xs">
                  <Badge size="sm">Technical Sales Leadership</Badge>
                  <Badge size="sm">Linux Administration</Badge>
                  <Badge size="sm">Community Management</Badge>
                  <Badge size="sm">Event Marketing</Badge>
                  <Badge size="sm">Developer Relations</Badge>
                </Group>
              </Stack>
            </Stack>
          </Paper>

          {/* DMC */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group wrap="nowrap">
                  <IconPhone size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">
                    Systems Engineer - Data Messaging & Communications Ltd
                  </Title>
                </Group>
                <Text c="dimmed">November 2008 - October 2010</Text>
              </Group>
              <List>
                <List.Item>
                  Provided first-line VoIP and Asterisk support on Debian Linux systems
                </List.Item>
                <List.Item>Implemented ticket tracking and network monitoring systems</List.Item>
                <List.Item>Automated provisioning processes to improve efficiency</List.Item>
                <List.Item>
                  Specialized in troubleshooting SIP and VoIP over consumer ADSL
                </List.Item>
                <List.Item>
                  Developed expertise in low-level networking (OSI Layer 3 and 4)
                </List.Item>
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
                <Group wrap="nowrap">
                  <IconBroadcast size={24} color="#FA5252" />
                  <Title order={3} size="h3">
                    Contracted Xen Sysadmin - BBC Backstage
                  </Title>
                </Group>
                <Text c="dimmed">February 2009 - August 2010</Text>
              </Group>
              <List>
                <List.Item>
                  Managed Linux-based R&D VM cluster "Playground" supporting BBC developers
                </List.Item>
                <List.Item>Administered 50+ guest VMs across 6-8 Xen hypervisor hosts</List.Item>
                <List.Item>
                  Provided technical support and machine provisioning for development teams
                </List.Item>
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
          <Title order={2} size="h2" c="blue.7">
            Selected Programming Portfolio
          </Title>

          {/* neoClan */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group wrap="nowrap">
                  <IconBrandReact size={24} color="#61DAFB" />
                  <Title order={3} size="h3">
                    neoClan
                  </Title>
                </Group>
                <Text c="dimmed">2023 - Present</Text>
              </Group>
              <Text>Membership check-in system for The Climbing Clan and The Caving Crew</Text>
              <List>
                <List.Item>
                  Built mobile-first React application for membership management
                </List.Item>
                <List.Item>
                  Integrated with WordPress and WooCommerce for seamless user experience
                </List.Item>
                <List.Item>
                  Improved operational efficiency through custom API development
                </List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://neoclan.climbingclan.com/" target="_blank">
                  Live Project
                </Anchor>
                <Anchor href="https://github.com/tdobson/neoclan" target="_blank">
                  GitHub
                </Anchor>
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
                <Group wrap="nowrap">
                  <IconCalculator size={24} color="#40C057" />
                  <Title order={3} size="h3">
                    Materials Calculator
                  </Title>
                </Group>
                <Text c="dimmed">2024</Text>
              </Group>
              <Text>Solar PV materials calculator for streamlined build planning</Text>
              <List>
                <List.Item>
                  Developed React-based calculator to replace slow spreadsheet solution
                </List.Item>
                <List.Item>Reduced calculation time from 5-10 minutes to seconds</List.Item>
                <List.Item>Implemented familiar interface for easy user adoption</List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://rastapopoulos.pages.dev/bom" target="_blank">
                  Live Project
                </Anchor>
                <Anchor href="https://github.com/tdobson/rastapopoulos" target="_blank">
                  GitHub
                </Anchor>
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
                <Group wrap="nowrap">
                  <IconBuildingCommunity size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">
                    Pieline.net
                  </Title>
                </Group>
                <Text c="dimmed">March 2015 - October 2015</Text>
              </Group>
              <Text>Community tech job board for the North West tech community</Text>
              <List>
                <List.Item>Built prototype using Node.js, Bootstrap, and MySQL</List.Item>
                <List.Item>
                  Tested user assumptions about job search and information presentation
                </List.Item>
                <List.Item>Implemented data-driven improvements based on user feedback</List.Item>
              </List>
              <Group gap="xs">
                <Anchor
                  href="http://web.archive.org/web/20150519044113/http://pieline.net/"
                  target="_blank"
                >
                  View archived job board
                </Anchor>
                <Anchor
                  href="https://tdobson.medium.com/what-we-learnt-from-building-a-jobboard-4474823db4f2"
                  target="_blank"
                >
                  Read about lessons learned
                </Anchor>
              </Group>
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
                <Group wrap="nowrap">
                  <IconCoin size={24} color="#FCC419" />
                  <Title order={3} size="h3">
                    Dripfeed
                  </Title>
                </Group>
                <Text c="dimmed">October 2013 - November 2013</Text>
              </Group>
              <Text>Financial management tool for responsible spending and saving</Text>
              <List>
                <List.Item>Led marketing strategy for YCombinator application</List.Item>
                <List.Item>
                  Contributed to product development and user acquisition strategy
                </List.Item>
              </List>
              <Group gap="xs">
                <Anchor
                  href="https://web.archive.org/web/20151016170204/http://blog.tdobson.net/2014/07/ycombinator-ill-do-it/"
                  target="_blank"
                >
                  Read about our YCombinator application
                </Anchor>
                <Anchor
                  href="http://web.archive.org/web/20131111160433/https://www.dripfeed.co/"
                  target="_blank"
                >
                  View archived application
                </Anchor>
              </Group>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Digital Marketing</Badge>
                <Badge size="sm">Product Strategy</Badge>
                <Badge size="sm">Startups</Badge>
                <Badge size="sm">Lean Startup</Badge>
              </Group>
            </Stack>
          </Paper>
        </Stack>

        {/* Volunteer Projects */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">
            Volunteer Projects
          </Title>

          {/* The Caving Crew */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group wrap="nowrap">
                  <IconMountain size={24} color="#228BE6" />
                  <Title order={3} size="h3">
                    Co-Founder at The Caving Crew
                  </Title>
                </Group>
                <Text c="dimmed">November 2019 - Present</Text>
              </Group>
              <List>
                <List.Item>
                  Setup and grew a BCA-Affiliated Caving Club to above-average size for UK Caving
                  Clubs
                </List.Item>
                <List.Item>
                  Implemented technical solutions for club management and member engagement
                </List.Item>
                <List.Item>
                  Associated with The Climbing Clan, sharing resources and community
                </List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://www.cavingcrew.com/" target="_blank">
                  Visit Website
                </Anchor>
              </Group>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Linux</Badge>
                <Badge size="sm">Leadership</Badge>
                <Badge size="sm">Node.js</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Freegle UK */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group wrap="nowrap">
                  <IconBroadcast size={24} color="#228BE6" />
                  <Title order={3} size="h3">
                    PR Consultant - Freegle UK
                  </Title>
                </Group>
                <Text c="dimmed">2022</Text>
              </Group>
              <Text>Volunteer PR consultant for the UK's largest reuse network</Text>
              <List>
                <List.Item>
                  Led "Stories for Freegle" campaign to increase local media visibility
                </List.Item>
                <List.Item>
                  Mentored volunteers in story development and media engagement
                </List.Item>
                <List.Item>
                  Successfully placed human interest stories in local media outlets
                </List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://www.miltonkeynes.co.uk/news/people/milton-keynes-grandad-turns-shattered-phones-into-arty-masterpieces-and-theyre-selling-like-hot-cakes-3782371" target="_blank">
                  Coverage Example 1
                </Anchor>
                <Anchor href="https://www.mkfm.com/news/local-news/milton-keynes-grandad-creates-art-work-from-old-phones-to-help-children-with-cancer/" target="_blank">
                  Coverage Example 2
                </Anchor>
              </Group>
              <Group gap="xs" mt="xs">
                <Badge size="sm">PR Strategy</Badge>
                <Badge size="sm">Media Relations</Badge>
                <Badge size="sm">Volunteer Mentoring</Badge>
                <Badge size="sm">Story Development</Badge>
              </Group>
            </Stack>
          </Paper>

          {/* DFEY */}
          <Paper withBorder p="md" radius="md">
            <Stack gap="xs">
              <Group justify="space-between">
                <Group wrap="nowrap">
                  <IconSchool size={24} color="#40C057" />
                  <Title order={3} size="h3">
                    Co-Founder - Digital Freedom in Education & Youth
                  </Title>
                </Group>
                <Text c="dimmed">June 2008 - April 2012</Text>
              </Group>
              <Text>
                Co-founded initiative to increase youth participation in technology through
                accessible event experiences.
              </Text>
              <List>
                <List.Item>
                  Organized youth delegations to major tech events:
                  <List withPadding>
                    <List.Item>2morro Festival (London)</List.Item>
                    <List.Item>Young Rewired State - London & Manchester centres</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  Delivered keynote presentations at technology conferences:
                  <List withPadding>
                    <List.Item>FutureEverything (Manchester)</List.Item>
                    <List.Item>OpenTech (London)</List.Item>
                    <List.Item>NeoN Digital Arts Festival (Dundee)</List.Item>
                    <List.Item>BECTA Open Source Schools 'Unconference' (Nottingham) - "Engaging Young People in Technology"</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  Led community outreach through Linux User Groups across Northern England
                </List.Item>
              </List>
              <Group gap="xs">
                <Anchor
                  href="http://web.archive.org/web/20110719024201/http://dfey.org/"
                  target="_blank"
                >
                  View archived website
                </Anchor>
              </Group>
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
                <Group wrap="nowrap">
                  <IconUserCheck size={24} color="#BE4BDB" />
                  <Title order={3} size="h3">
                    Parliamentary Candidate - Pirate Party UK
                  </Title>
                </Group>
                <Text c="dimmed">March 2010 - May 2010</Text>
              </Group>
              <List>
                <List.Item>
                  Represented Manchester Gorton constituency in 2010 General Election
                </List.Item>
                <List.Item>Coordinated volunteer teams and managed campaign resources</List.Item>
                <List.Item>Engaged with media and handled public speaking engagements</List.Item>
              </List>
              <Group gap="xs">
                {/* Archive links:
                  Campaign site: https://web.archive.org/web/20100603071353/http://votepirate.org:80/gorton
                  Microsite: https://web.archive.org/web/20160323090319/http://www.amiapirate.org/
                */}
                <Anchor href="https://thenextweb.com/news/pirate-party-uk" target="_blank">
                  Read The Next Web coverage
                </Anchor>
              </Group>
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
                <Group wrap="nowrap">
                  <IconCamper size={24} color="#FA5252" />
                  <Title order={3} size="h3">
                    Creator - The Van Project
                  </Title>
                </Group>
                <Text c="dimmed">June 2015 - February 2020</Text>
              </Group>
              <Text>Full van conversion project with integrated systems and mobile office</Text>
              <List>
                <List.Item>
                  Designed and implemented complete living space conversion using Lean and Agile principles
                </List.Item>
                <List.Item>Installed electrical, gas, and structural systems</List.Item>
                <List.Item>
                  Delivered talks about mobile business operations at major tech conferences:
                  <List withPadding>
                    <List.Item>UKNOF (UK Network Operators Forum)</List.Item>
                    <List.Item>Business of Software Europe 2017</List.Item>
                  </List>
                </List.Item>
                <List.Item>Successfully operated consulting business while traveling across Europe</List.Item>
              </List>
              <Group gap="xs">
                <Anchor href="https://www.youtube.com/watch?v=Ci_H2EOONzA&t=13" target="_blank">
                  Watch UKNOF Talk
                </Anchor>
                <Anchor href="https://businessofsoftware.wistia.com/medias/mqo7e2iqtz" target="_blank">
                  Watch Business of Software Talk
                </Anchor>
                <Anchor href="https://www.linkedin.com/pulse/whats-like-running-business-from-van-tim-dobson/" target="_blank">
                  Read About Van Life
                </Anchor>
              </Group>
              <Group gap="xs" mt="xs">
                <Badge size="sm">Project Management</Badge>
                <Badge size="sm">Technical Design</Badge>
                <Badge size="sm">Mobile Business</Badge>
                <Badge size="sm">Public Speaking</Badge>
                <Badge size="sm">Lean</Badge>
                <Badge size="sm">Agile</Badge>
              </Group>
            </Stack>
          </Paper>
        </Stack>



        {/* Skills */}
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">
                Technical Skills
              </Title>
              <Group gap="xs" wrap="wrap">
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
                  'Scrum',
                ].map((skill) => (
                  <Badge key={skill} size="lg" variant="light" color="blue">
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">
                Languages
              </Title>
              <Group gap="xs" wrap="wrap">
                <Badge size="lg" variant="light" color="green">
                  English (Native)
                </Badge>
                <Badge size="lg" variant="light" color="yellow">
                  French (Semi-fluent)
                </Badge>
                <Badge size="lg" variant="light" color="yellow">
                  Russian (Some understanding)
                </Badge>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">
                Awards & Recognition
              </Title>
              <Stack gap="xs">
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>Women In Adventure Film Competition</Text>
                  <Text size="sm">Special Mention (2021)</Text>
                  <Text size="sm" c="dimmed">
                    Documentary about caving with family during lockdown
                  </Text>
                  <Group gap="xs">
                    <Anchor size="sm" href="https://www.youtube.com/watch?v=OOMMUNGkZXI" target="_blank">
                      Watch Film
                    </Anchor>
                    <Anchor size="sm" href="https://www.notreallyheremedia.com/news/glossop-chronicle/mum-and-sons-caving-video-scoops-lockdown-movie-award/" target="_blank">
                      Read Coverage
                    </Anchor>
                  </Group>
                </Paper>

                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>Cyber Security Challenge UK</Text>
                  <Text size="sm">Network Defense Finalist (2011)</Text>
                  <Text size="sm" c="dimmed">
                    National cyber security competition
                  </Text>
                  <Group gap="xs">
                    <Anchor size="sm" href="https://www.theengineer.co.uk/content/opinion/the-skills-behind-the-screens/" target="_blank">
                      Coverage 1
                    </Anchor>
                    <Anchor size="sm" href="https://www.information-age.com/defending-the-nation-26182/" target="_blank">
                      Coverage 2
                    </Anchor>
                  </Group>
                </Paper>

                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>High Peak Young Sports Leader</Text>
                  <Text size="sm">Winner (2007)</Text>
                  <Text size="sm" c="dimmed">
                    Recognition for youth sports leadership
                  </Text>
                  <Anchor
                    size="sm"
                    href="https://www.manchestereveningnews.co.uk/news/local-news/tims-date-at-number-10-1011735"
                    target="_blank"
                  >
                    Read Coverage
                  </Anchor>
                </Paper>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md">
              <Title order={2} size="h2" c="blue.7">
                Education
              </Title>
              <Stack gap="xs">
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>Manchester Grammar School</Text>
                  <Text size="sm" c="dimmed">
                    2001 - 2007
                  </Text>
                </Paper>
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>Cheadle & Marple 6th Form College</Text>
                  <Text size="sm" c="dimmed">
                    2007 - 2009
                  </Text>
                </Paper>
                <Paper withBorder p="xs" radius="md">
                  <Text fw={500}>16 Hour Outdoor First Aid</Text>
                  <Text size="sm" c="dimmed">
                    Current
                  </Text>
                </Paper>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* References */}
        <Stack gap="md">
          <Title order={2} size="h2" c="blue.7">
            Selected References
          </Title>
          <Grid>
            {testimonials.map((testimonial) => (
              <Grid.Col key={testimonial.name} span={{ base: 12, md: 6 }}>
                <Paper withBorder p="md" radius="md">
                  <Stack gap="xs">
                    <Group>
                      <Avatar
                        src={`/${testimonial.image}`}
                        alt={testimonial.name}
                        size="lg"
                        radius="xl"
                      />
                      <div>
                        <Text fw={500}>{testimonial.name}</Text>
                        <Text size="sm" c="dimmed">
                          {testimonial.jobTitle}
                        </Text>
                      </div>
                    </Group>
                    <Text fz="sm" fs="italic">
                      "{testimonial.testimonial}"
                    </Text>
                    <Anchor href={testimonial.link} size="sm" target="_blank">
                      View Profile
                    </Anchor>
                  </Stack>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>

        <Text c="dimmed" ta="center" mt="xl">
          More references available upon request
        </Text>


      </Stack>

      {/* Media & Press Coverage */}
      <Stack gap="md">
        <Title order={2} size="h2" c="blue.7">
          Selected Media & Press Coverage
        </Title>

        <Paper withBorder p="md" radius="md">
          <Stack gap="xs">
            <Title order={3} size="h3">
              Television & Radio Appearances
            </Title>
            <List>
              <List.Item>
                <Anchor href="https://www.facebook.com/watch/?v=396133911168078" target="_blank">
                  BBC's The One Show (2019) - Indoor climbing segment
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.facebook.com/TimDobsonUK/videos/2464694890480726/" target="_blank">
                  BBC Radio 2 - Jeremy Vine Show with Amol Rajan (2019) - Van life discussion
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.facebook.com/TimDobsonUK/videos/390686671564876/" target="_blank">
                  BBC Radio 5 Live (2019) - France heatwave discussion
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.facebook.com/TimDobsonUK/videos/2123484404628212/" target="_blank">
                  BBC Radio Scotland (2019) - Interview about grandmother's first climbing experience
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.facebook.com/watch/?v=1860259470670062" target="_blank">
                  BBC Radio Manchester (2019) - "He's lived in his van for 2 years"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.facebook.com/watch/?v=1878652862246031" target="_blank">
                  BBC 3 Counties Radio (2019) - Interview about grandmother's first climb
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://techgrumps.wordpress.com/2023/05/09/techgrumps-3-3-tech-bros-frozen-in-carbonite/" target="_blank">
                  TechGrumps Podcast (May 2023) - Guest appearance
                </Anchor>
              </List.Item>
            </List>
          </Stack>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Stack gap="xs">
            <Title order={3} size="h3">
              Press Coverage
            </Title>
            <List>
              <List.Item>
                <Anchor href="https://metro.co.uk/2020/05/11/adventurous-gran-goes-climbing-attic-caving-bed-lockdown-12683820/" target="_blank">
                  Metro (2020) - "Adventurous gran goes climbing in attic, caving under bed in lockdown"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.mirror.co.uk/news/uk-news/gran-71-lockdown-practices-rock-22001184" target="_blank">
                  Mirror (2020) - "Gran, 71, in lockdown practices rock climbing in attic and caving under her bed"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.manchestereveningnews.co.uk/news/greater-manchester-news/manchester-van-dwellers-ditch-houses-16110998" target="_blank">
                  Manchester Evening News (2019) - "The Manchester van dwellers who've ditched their houses for a life on the road"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.climber.co.uk/news/great-grandma-starts-climbing-aged-just-99/" target="_blank">
                  Climber Magazine (2019) - "Great-grandma starts climbing aged just 99"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://parthianclimbing.com/old-hands-new-heights-99-year-old-grandma-proves-age-is-no-obstacle/" target="_blank">
                  Parthian Climbing (2019) - "Old Hands, New Heights: 99-year-old Grandma Proves Age is No Obstacle"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.bbc.co.uk/news/av/uk-england-beds-bucks-herts-46878947" target="_blank">
                  BBC News (2019) - Video feature on 99-year-old climber
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.notreallyheremedia.com/news/tameside-reporter/young-stalybridge-woman-looking-to-turn-a-negative-into-a-positive/" target="_blank">
                  Tameside Reporter (2023) - "Young Stalybridge woman looking to turn a negative into a positive"
                </Anchor>
              </List.Item>
            </List>
          </Stack>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Stack gap="xs">
            <Title order={3} size="h3">
              Photography Credits
            </Title>
            <List>
              <List.Item>
                <Anchor href="https://www.yorkpress.co.uk/business/news/10208668.bytemark-hosting-invests-in-data-centre/" target="_blank">
                  York Press (2013) - "Bytemark Hosting invests in data centre"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.doncasterfreepress.co.uk/news/doncaster-named-as-best-place-in-britain-to-get-a-decent-pint-65163" target="_blank">
                  Doncaster Free Press (2013) - "Doncaster named as best place in Britain to get a decent pint"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.yorkshireeveningpost.co.uk/news/leeds-village-prepares-for-its-much-loved-annual-beer-celebration-622537" target="_blank">
                  Yorkshire Evening Post (2013) - "Leeds village prepares for its much-loved annual beer celebration"
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.derbyshiretimes.co.uk/news/chesterfield-is-third-best-place-in-uk-for-a-pint-1252130" target="_blank">
                  Derbyshire Times (2013) - "Chesterfield is third best place in UK for a pint"
                </Anchor>
              </List.Item>
              <List.Item>
              <Anchor href="https://www.themoscowtimes.com/2014/11/10/carlsberg-rescued-from-russian-sanctions-dip-by-asian-growth-a41166" target="_blank">
                  The Moscow Times (2014) - "Carlsberg Rescued From Russian Sanctions Dip by Asian Growth"
                </Anchor>
              </List.Item>
            </List>
          </Stack>
        </Paper>
      </Stack>
      <Paper withBorder p="md" radius="md" mt="xl">
        <Group justify="center" gap="xl">
          <ProtectedEmail isLoading={isLoading} email={email} error={error} />
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

    </Container>
  );
}
