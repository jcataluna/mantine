import { render, tests } from '@mantine-tests/core';
import { Timeline, TimelineProps, TimelineStylesNames } from './Timeline';
import { TimelineGroup } from './TimelineGroup/TimelineGroup';
import { TimelineItem } from './TimelineItem/TimelineItem';

const defaultProps: TimelineProps = {
  children: [
    <Timeline.Item key="1" title="First" bullet="$">
      1
    </Timeline.Item>,
    <Timeline.Item key="2" title="Second" bullet="$">
      2
    </Timeline.Item>,
    <Timeline.Item key="3" title="Third" bullet="$">
      3
    </Timeline.Item>,
    <Timeline.Group key="4" left={<div>Left</div>} right={<div>Right</div>} bullet="●" />,
  ],
};

describe('@mantine/core/Timeline', () => {
  tests.itSupportsSystemProps<TimelineProps, TimelineStylesNames>({
    component: Timeline,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Timeline',
    stylesApiSelectors: [
      'root',
      'itemBody',
      'itemContent',
      'itemBullet',
      'item',
      'itemTitle',
      'group',
      'groupLeft',
      'groupRight',
      'groupBullet',
    ],
  });

  it('handles active item correctly', () => {
    const { container, rerender } = render(<Timeline {...defaultProps} active={1} />);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(1);

    rerender(<Timeline {...defaultProps} active={2} />);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-active]')).toHaveLength(3);
    expect(container.querySelectorAll('.mantine-Timeline-item[data-line-active]')).toHaveLength(2);
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });

  it('exposes TimelineGroup as Timeline.Group', () => {
    expect(Timeline.Group).toBe(TimelineGroup);
  });

  it('supports align="center"', () => {
    const { container } = render(<Timeline {...defaultProps} align="center" />);
    expect(container.querySelector('.mantine-Timeline-root')).toHaveAttribute(
      'data-align',
      'center'
    );
  });

  it('supports compact prop', () => {
    const { container } = render(<Timeline {...defaultProps} compact />);
    expect(container.querySelector('.mantine-Timeline-root')).toHaveAttribute('data-compact');
  });

  it('sets data-side on items in center mode', () => {
    const { container } = render(
      <Timeline align="center" active={1}>
        <Timeline.Item key="1" side="left">Left content</Timeline.Item>
        <Timeline.Item key="2" side="right">Right content</Timeline.Item>
        <Timeline.Item key="3">Default side</Timeline.Item>
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    expect(items[0]).toHaveAttribute('data-side', 'left');
    expect(items[1]).toHaveAttribute('data-side', 'right');
    expect(items[2]).toHaveAttribute('data-side', 'right'); // default
  });

  it('does not set data-side on items in left/right mode', () => {
    const { container } = render(
      <Timeline align="left" active={1}>
        <Timeline.Item key="1" side="left">Content</Timeline.Item>
      </Timeline>
    );

    const item = container.querySelector('.mantine-Timeline-item');
    expect(item).not.toHaveAttribute('data-side');
  });

  it('renders Timeline.Group with left and right content', () => {
    const { container } = render(
      <Timeline align="center" active={1}>
        <Timeline.Group
          key="1"
          left={<div data-testid="group-left">Left</div>}
          right={<div data-testid="group-right">Right</div>}
          bullet="●"
        />
        <Timeline.Item key="2" side="right">After group</Timeline.Item>
      </Timeline>
    );

    expect(container.querySelector('[data-testid="group-left"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="group-right"]')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Timeline-group')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Timeline-groupBullet')).toBeInTheDocument();
  });

  it('handles active state with groups', () => {
    const { container } = render(
      <Timeline align="center" active={1}>
        <Timeline.Item key="1" side="left">First</Timeline.Item>
        <Timeline.Group key="2" left={<div>Left</div>} right={<div>Right</div>} />
        <Timeline.Item key="3" side="right">Third</Timeline.Item>
      </Timeline>
    );

    const items = container.querySelectorAll('.mantine-Timeline-item');
    const groups = container.querySelectorAll('.mantine-Timeline-group');

    expect(items[0]).toHaveAttribute('data-active');
    expect(groups[0]).toHaveAttribute('data-active');
    expect(items[1]).not.toHaveAttribute('data-active');
  });
});
