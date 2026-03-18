import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Timeline' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_bullet = {
  name: '⭐ Demo: bullet',
  render: renderDemo(demos.bullet),
};

export const Demo_centerAlign = {
  name: '⭐ Demo: centerAlign',
  render: renderDemo(demos.centerAlign),
};

export const Demo_compact = {
  name: '⭐ Demo: compact',
  render: renderDemo(demos.compact),
};

export const Demo_group = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};
