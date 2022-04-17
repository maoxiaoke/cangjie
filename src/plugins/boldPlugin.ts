import {
  createPluginFactory,
  onKeyDownToggleMark,
  someHtmlElement,
} from '@udecode/plate-core';

import type { ToggleMarkPlugin } from '@udecode/plate-core';

export const MARK_BOLD = 'bold';

export const createBoldPlugin = createPluginFactory<ToggleMarkPlugin>({
  key: MARK_BOLD,
  isLeaf: true,
  deserializeHtml: {
    rules: [
      { validNodeName: ['STRONG', 'B'] },
      {
        validStyle: {
          fontWeight: ['600', '700', 'bold'],
        },
      },
    ],
    query: (el) =>
      !someHtmlElement(el, (node) => node.style.fontWeight === 'normal'),
  },

  handlers: {
    onKeyDown: onKeyDownToggleMark,
  },

  options: {
    hotkey: 'mod+b',
  }
})
