import * as React from 'react';
import { Plate, createPlugins } from '@udecode/plate-core';
import { createUIPlugin } from './plugins/ui/createUI';
import { createBoldPlugin } from './plugins/boldPlugin';
import { createItalicPlugin } from './plugins/italicPlugin';
import { createHeadingPlugin } from './plugins/nodes/createHeadingPlugin';
import { createParagraphPlugin } from './plugins/nodes/createParagraphPlugin';
import { withStyledPlaceHolders } from './placeholders';

import type { PlateStoreState, PlatePlugin } from '@udecode/plate-core';

const ID = 'cangjie';

const components =  withStyledPlaceHolders(createUIPlugin());
export interface CangjieProps<T = {}> {
  /**
   * The chilren rendered inside Cangjie
   */
  children?: React.ReactNode;

  /**
   * Initial value of the editor
   * @default [{ chilren: [{ text:'' }]}]
   */
  initialValue?: PlateStoreState['value']

  /**
   * extraPlugis need to append to
   * @default []
   */
  extraPlugins?: PlatePlugin<T>[];
}

export default function Cangjie (props: CangjieProps) {
  const plugins = createPlugins(
    [
      createBoldPlugin(),
      createItalicPlugin(),
      createParagraphPlugin(),
      // FIXME: types
      createHeadingPlugin(),
    ],
    {
      // @ts-ignore
      components,
    }
  )

  return (
    <div>
      <Plate
        id={ID}
        initialValue={props.initialValue}
        plugins={plugins}
        ></Plate>
    </div>
  )
}
