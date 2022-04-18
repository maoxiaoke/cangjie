import { StyledLeaf } from '@udecode/plate-styled-components';

import { MARK_BOLD } from '../boldPlugin';
import { MARK_ITALIC } from '../italicPlugin';
import { withProps } from './withProps';

export const createUIPlugin = () => {
  const components = {
    [MARK_BOLD]: withProps(StyledLeaf, { as: 'strong' }),
    [MARK_ITALIC]: withProps(StyledLeaf, { as: 'i' }),
  }

  return components;
}

