import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from '@tabler/icons-react';
import { Text } from '../Text';
import { Timeline } from './Timeline';

export default { title: 'Timeline' };

export function Usage() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1}>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function AutoContrast() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} autoContrast color="lime.3">
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} bulletSize={24} lineWidth={2} unstyled>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function WithoutIcons() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} bulletSize={24}>
        <Timeline.Item title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Pull request" lineVariant="dashed">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review">
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function AlignRight() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} bulletSize={24} align="right">
        <Timeline.Item title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Pull request" lineVariant="dashed">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review">
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

/* Simple card component for center/group demos */
function TaskCard({
  title,
  status,
  duration,
  color = '#228be6',
}: {
  title: string;
  status: string;
  duration: string;
  color?: string;
}) {
  return (
    <div
      style={{
        border: '1px solid #dee2e6',
        borderRadius: 8,
        padding: '12px 16px',
        minWidth: 180,
        backgroundColor: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
        <Text fw={600} size="sm" style={{ textTransform: 'uppercase' }}>
          {title}
        </Text>
        <Text
          size="xs"
          style={{
            marginLeft: 'auto',
            backgroundColor: color,
            color: '#fff',
            borderRadius: 4,
            padding: '2px 8px',
          }}
        >
          {status}
        </Text>
      </div>
      <Text size="xs" c="dimmed">
        Duration: {duration}
      </Text>
    </div>
  );
}

export function CenterAlign() {
  return (
    <div style={{ margin: 40, maxWidth: 800 }}>
      <Text fw={700} size="lg" mb="md">
        Center-aligned Timeline with items on both sides
      </Text>
      <Timeline active={3} bulletSize={20} lineWidth={2} align="center">
        <Timeline.Item
          side="left"
          bullet={<IconGitBranch size={12} />}
          title="Step 1"
        >
          <TaskCard title="Initialize" status="OK" duration="0.5s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item
          side="right"
          bullet={<IconGitCommit size={12} />}
          title="Step 2"
        >
          <TaskCard title="Detect Language" status="OK" duration="3.65s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item
          side="left"
          bullet={<IconGitPullRequest size={12} />}
          title="Step 3"
        >
          <TaskCard title="Translate" status="OK" duration="2.1s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item
          side="right"
          bullet={<IconMessageDots size={12} />}
          title="Step 4"
        >
          <TaskCard title="Validate" status="PENDING" duration="--" color="#fab005" />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function CenterAlignCompact() {
  return (
    <div style={{ margin: 40, maxWidth: 800 }}>
      <Text fw={700} size="lg" mb="md">
        Center-aligned + Compact spacing
      </Text>
      <Timeline active={4} bulletSize={16} lineWidth={2} align="center" compact>
        <Timeline.Item side="left">
          <TaskCard title="Initialize" status="OK" duration="0.5s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item side="right">
          <TaskCard title="Detect Language" status="OK" duration="3.65s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item side="left">
          <TaskCard title="Translate" status="OK" duration="2.1s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item side="right">
          <TaskCard title="Summarize" status="OK" duration="1.8s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Item side="left">
          <TaskCard title="Validate" status="PENDING" duration="--" color="#fab005" />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function GroupParallel() {
  return (
    <div style={{ margin: 40, maxWidth: 800 }}>
      <Text fw={700} size="lg" mb="md">
        Timeline.Group – Parallel items on both sides
      </Text>
      <Timeline active={3} bulletSize={20} lineWidth={2} align="center" compact>
        <Timeline.Item side="right">
          <TaskCard title="Initialize" status="OK" duration="0.5s" color="#40c057" />
        </Timeline.Item>

        <Timeline.Group
          bullet={<IconGitCommit size={12} />}
          left={
            <TaskCard title="Detect Language" status="OK" duration="3.65s" color="#40c057" />
          }
          right={
            <TaskCard title="Extract Entities" status="OK" duration="2.1s" color="#40c057" />
          }
        />

        <Timeline.Group
          bullet={<IconGitPullRequest size={12} />}
          left={
            <TaskCard title="Translate" status="OK" duration="4.2s" color="#40c057" />
          }
          right={
            <>
              <TaskCard title="Summarize" status="OK" duration="1.8s" color="#40c057" />
              <TaskCard title="Sentiment" status="OK" duration="0.9s" color="#40c057" />
            </>
          }
        />

        <Timeline.Item side="left">
          <TaskCard title="Finalize" status="PENDING" duration="--" color="#fab005" />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function CompactLeftAlign() {
  return (
    <div style={{ margin: 40 }}>
      <Text fw={700} size="lg" mb="md">
        Compact spacing (left-aligned)
      </Text>
      <Timeline active={2} bulletSize={20} lineWidth={2} compact>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="Step 1">
          <Text c="dimmed" size="sm">Created branch</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Step 2">
          <Text c="dimmed" size="sm">Pushed commits</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitPullRequest size={12} />} title="Step 3">
          <Text c="dimmed" size="sm">Opened PR</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconMessageDots size={12} />} title="Step 4">
          <Text c="dimmed" size="sm">Code review</Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
