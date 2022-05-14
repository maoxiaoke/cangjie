import { StyledLeaf, StyledElement } from '@udecode/plate-styled-components';

import { MARK_BOLD } from '../boldPlugin';
import { MARK_ITALIC } from '../italicPlugin';
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from '../nodes/createHeadingPlugin';
import { withProps } from './withProps';

import { css } from 'styled-components';

export const createUIPlugin = () => {
  const components = {
    [MARK_BOLD]: withProps(StyledLeaf, { as: 'strong' }),
    [MARK_ITALIC]: withProps(StyledLeaf, { as: 'i' }),
    [ELEMENT_H1]: withProps(StyledElement, {
      as: 'h1',
      styles: {
        root: css`
          margin: 2em 0 4px;
          font-size: 1.875em;
          font-weight: 500;
          line-height: 1.3;
        `,
      },
    }),
    [ELEMENT_H3]: withProps(StyledElement, {
      as: 'h3',
      style: {
        // @ts-ignore
        root: css`
          margin: 1em 0 1px;
          font-size: 1.25em;
          font-weight: 500;
          line-height: 1.3;
          color: #434343;
        `
      }
    })
  }

  return components;
}

