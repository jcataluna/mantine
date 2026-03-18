import { IconGitBranch, IconGitMerge, IconGitPullRequest } from '@tabler/icons-react';
import { Card, Text, Timeline } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timeline, Card, Text } from '@mantine/core';
import { IconGitBranch, IconGitMerge, IconGitPullRequest } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2} align="center" compact>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Branches created" side="left">
        <Text c="dimmed" size="sm">Two branches created for parallel work</Text>
      </Timeline.Item>

      <Timeline.Group
        bullet={<IconGitPullRequest size={12} />}
        left={
          <Card shadow="sm" padding="sm" radius="md" withBorder>
            <Text fw={500} size="sm">Frontend</Text>
            <Text c="dimmed" size="xs">Updated UI components</Text>
          </Card>
        }
        right={
          <Card shadow="sm" padding="sm" radius="md" withBorder>
            <Text fw={500} size="sm">Backend</Text>
            <Text c="dimmed" size="xs">Updated API endpoints</Text>
          </Card>
        }
      />

      <Timeline.Item bullet={<IconGitMerge size={12} />} title="Merged" side="right">
        <Text c="dimmed" size="sm">Both branches merged into main</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`;

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2} align="center" compact>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Branches created" side="left">
        <Text c="dimmed" size="sm">Two branches created for parallel work</Text>
      </Timeline.Item>

      <Timeline.Group
        bullet={<IconGitPullRequest size={12} />}
        left={
          <Card shadow="sm" padding="sm" radius="md" withBorder>
            <Text fw={500} size="sm">Frontend</Text>
            <Text c="dimmed" size="xs">Updated UI components</Text>
          </Card>
        }
        right={
          <Card shadow="sm" padding="sm" radius="md" withBorder>
            <Text fw={500} size="sm">Backend</Text>
            <Text c="dimmed" size="xs">Updated API endpoints</Text>
          </Card>
        }
      />

      <Timeline.Item bullet={<IconGitMerge size={12} />} title="Merged" side="right">
        <Text c="dimmed" size="sm">Both branches merged into main</Text>
      </Timeline.Item>
    </Timeline>
  );
}

export const group: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
