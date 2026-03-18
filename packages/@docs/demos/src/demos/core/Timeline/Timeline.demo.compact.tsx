import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';
import { Text, Timeline } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2} compact>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">Created branch fix-notifications from master</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">Pushed 23 commits to fix-notifications</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitPullRequest size={12} />} title="Pull request">
        <Text c="dimmed" size="sm">Submitted pull request #187</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconMessageDots size={12} />} title="Code review">
        <Text c="dimmed" size="sm">Robert Gluesticker left a code review</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`;

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2} compact>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">Created branch fix-notifications from master</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">Pushed 23 commits to fix-notifications</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitPullRequest size={12} />} title="Pull request">
        <Text c="dimmed" size="sm">Submitted pull request #187</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconMessageDots size={12} />} title="Code review">
        <Text c="dimmed" size="sm">Robert Gluesticker left a code review</Text>
      </Timeline.Item>
    </Timeline>
  );
}

export const compact: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
