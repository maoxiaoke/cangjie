import { withPlaceholders } from '@udecode/plate-ui-placeholder'
import { ELEMENT_PARAGRAPH } from './plugins/nodes/createParagraphPlugin';

export const withStyledPlaceHolders = (components: any) =>
  withPlaceholders(components, [
    {
      key: ELEMENT_PARAGRAPH,
      placeholder: `Type '/' for commands`,
      hideOnBlur: true,
    }
  ]);

