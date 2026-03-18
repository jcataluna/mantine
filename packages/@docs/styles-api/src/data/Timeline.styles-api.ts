import type { TimelineFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TimelineStylesApi: StylesApiData<TimelineFactory> = {
  selectors: {
    root: 'Root element',
    item: 'Item root element',
    itemBody: 'Item body, wraps title and content',
    itemTitle: 'Item title, controlled by title prop',
    itemContent: 'Item content, controlled by children prop',
    itemBullet: 'Item bullet',
    group: 'Group root element, used for parallel items',
    groupLeft: 'Group left content area',
    groupRight: 'Group right content area',
    groupBullet: 'Group bullet',
  },

  vars: {
    root: {
      '--tl-bullet-size': 'Controls bullet `width` and `height`',
      '--tl-color': 'Controls active bullet and line colors',
      '--tl-icon-color': 'Controls icon color',
      '--tl-line-width': 'Controls width of the line between bullets',
      '--tl-radius': 'Controls bullet `border-radius`',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: ['item', 'itemBullet', 'group', 'groupBullet'],
      condition: 'Item/Group index is =< Timeline active prop',
    },
    {
      modifier: 'data-line-active',
      selector: ['item', 'group'],
      condition: 'Item/Group index is < Timeline active prop',
    },
    {
      modifier: 'data-side',
      selector: ['item'],
      condition: 'Timeline align is center, value is left or right',
    },
    {
      modifier: 'data-compact',
      selector: ['root'],
      condition: 'Timeline compact prop is set',
    },
  ],
};
