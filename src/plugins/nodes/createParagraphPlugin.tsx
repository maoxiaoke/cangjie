import {
  createPluginFactory,
} from '@udecode/plate-core';

export const ELEMENT_PARAGRAPH = 'p';

/**
 * Enables support for paragraphs.
 */
export const createParagraphPlugin = createPluginFactory({
  key: ELEMENT_PARAGRAPH,
  isElement: true,
  deserializeHtml: {
    rules: [
      {
        validNodeName: 'P',
      },
    ],
    query: (el) => el.style.fontFamily !== 'Consolas',
  },
});
