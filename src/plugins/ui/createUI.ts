import { StyledLeaf } from '@udecode/plate-styled-components';

import { MARK_BOLD } from '../boldPlugin';
import { withProps } from './withProps';

export const createUIPlugin = () => {
  const components = {
    [MARK_BOLD]: withProps(StyledLeaf, { as: 'strong' }),
  }

  return components;
}

