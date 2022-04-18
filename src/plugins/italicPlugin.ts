import {
  createPluginFactory,
  onKeyDownToggleMark,
  someHtmlElement,
  ToggleMarkPlugin,
} from '@udecode/plate-core';

export const MARK_ITALIC = 'italic';

/**
 * Enables support for italic formatting.
 */
export const createItalicPlugin = createPluginFactory<ToggleMarkPlugin>({
  key: MARK_ITALIC,
  isLeaf: true,

  deserializeHtml: {
    rules: [
      { validNodeName: ['EM', 'I'] },
      {
        validStyle: {
          fontStyle: 'italic',
        },
      },
    ],
    query: (el) =>
      !someHtmlElement(el, (node) => node.style.fontStyle === 'normal'),
  },

  handlers: {
    onKeyDown: onKeyDownToggleMark,
  },

  options: {
    hotkey: 'mod+i',
  },
});
