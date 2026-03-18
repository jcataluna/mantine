import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';
import { Text, Timeline } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2} align="center">
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch" side="left">
        <Text c="dimmed" size="sm">Created branch fix-notifications from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits" side="right">
        <Text c="dimmed" size="sm">Pushed 23 commits to fix-notifications</Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitPullRequest size={12} />} title="Pull request" side="left">
        <Text c="dimmed" size="sm">Submitted pull request Fix incorrect notification (#187)</Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconMessageDots size={12} />} title="Code review" side="right">
        <Text c="dimmed" size="sm">Robert Gluesticker left a code review</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`;

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2} align="center">
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch" side="left">
        <Text c="dimmed" size="sm">Created branch fix-notifications from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits" side="right">
        <Text c="dimmed" size="sm">Pushed 23 commits to fix-notifications</Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitPullRequest size={12} />} title="Pull request" side="left">
        <Text c="dimmed" size="sm">Submitted pull request Fix incorrect notification (#187)</Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconMessageDots size={12} />} title="Code review" side="right">
        <Text c="dimmed" size="sm">Robert Gluesticker left a code review</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}

export const centerAlign: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
