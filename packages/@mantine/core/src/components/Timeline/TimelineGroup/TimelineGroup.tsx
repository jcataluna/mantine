import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  useMantineTheme,
  useProps,
} from '../../../core';
import { useTimelineContext } from '../Timeline.context';
import classes from '../Timeline.module.css';

export type TimelineGroupStylesNames =
  | 'group'
  | 'groupLeft'
  | 'groupRight'
  | 'groupBullet';

export interface TimelineGroupProps
  extends BoxProps,
    CompoundStylesApiProps<TimelineGroupFactory>,
    ElementProps<'div'> {
  __active?: boolean;
  __lineActive?: boolean;

  /** Content displayed on the left side of the timeline */
  left?: React.ReactNode;

  /** Content displayed on the right side of the timeline */
  right?: React.ReactNode;

  /** React node that should be rendered inside the bullet */
  bullet?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default `'xl'` */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color to control active item colors @default `theme.primaryColor` */
  color?: MantineColor;

  /** Controls line border style @default `'solid'` */
  lineVariant?: 'solid' | 'dashed' | 'dotted';
}

export type TimelineGroupFactory = Factory<{
  props: TimelineGroupProps;
  ref: HTMLDivElement;
  stylesNames: TimelineGroupStylesNames;
  compound: true;
}>;

export const TimelineGroup = factory<TimelineGroupFactory>((_props, ref) => {
  const props = useProps('TimelineGroup', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    __active,
    __lineActive,
    __vars,
    left,
    right,
    bullet,
    radius,
    color,
    lineVariant,
    mod,
    ...others
  } = props;

  const ctx = useTimelineContext();
  const theme = useMantineTheme();

  const stylesApiProps = { classNames, styles };

  return (
    <Box
      {...ctx.getStyles('group', { ...stylesApiProps, className, style })}
      mod={[{ 'line-active': __lineActive, active: __active }, mod]}
      ref={ref}
      __vars={{
        '--tli-radius': radius ? getRadius(radius) : undefined,
        '--tli-color': color ? getThemeColor(color, theme) : undefined,
        '--tli-border-style': lineVariant || undefined,
      }}
      {...others}
    >
      <div {...ctx.getStyles('groupLeft', stylesApiProps)}>
        {left}
      </div>

      <Box
        {...ctx.getStyles('groupBullet', stylesApiProps)}
        mod={{ 'with-child': !!bullet, active: __active }}
      >
        {bullet}
      </Box>

      <div {...ctx.getStyles('groupRight', stylesApiProps)}>
        {right}
      </div>
    </Box>
  );
});

TimelineGroup.classes = classes;
TimelineGroup.displayName = '@mantine/core/TimelineGroup';
