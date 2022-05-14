import * as React from 'react';

import {
  createPluginFactory, onKeyDownToggleElement, PlatePlugin, HotkeyPlugin
} from '@udecode/plate-core';

export interface HeadingsPlugin {
  levels: number;
}

export const ELEMENT_H1 = 'h1';
export const ELEMENT_H2 = 'h2';
export const ELEMENT_H3 = 'h3';
export const ELEMENT_H4 = 'h4';
export const ELEMENT_H5 = 'h5';
export const ELEMENT_H6 = 'h6';

export const KEYS_HEADING = [ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6];

export const createHeadingPlugin = createPluginFactory<HeadingsPlugin>({
  key: 'heading',
  options: {
    levels: 6,
  },
  then: (editor, { options: { levels } = {} }) => {
    const plugins: PlatePlugin<{}, {}>[] = [];

    for (let level = 1; level <= levels!; level++) {
      const key = KEYS_HEADING[level - 1];

      const plugin: PlatePlugin<{}, HotkeyPlugin> = {
        key,
        isElement: true,
        deserializeHtml: {
          rules: [
            {
              validNodeName: `H${level}`,
            },
          ],
        },
        component: () => (<div>fsfsfs</div>),
        handlers: {
          onKeyDown: onKeyDownToggleElement,
        },
        options: {},
      };

      if (level < 4) {
        plugin.options!.hotkey = [`mod+opt+${level}`, `mod+shift+${level}`];
      }

      plugins.push(plugin);
    }

    return {
      plugins,
    };
  },
});
