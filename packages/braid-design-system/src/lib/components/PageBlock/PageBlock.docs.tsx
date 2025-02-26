import React, { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Box, PageBlock, TextLink } from '../';
import source from '@braid-design-system/source.macro';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { gutters, validPageBlockComponents } from './PageBlock';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  Example: () =>
    source(
      <PageBlock width="medium">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  description: (
    <Text>
      Provides a top-level page container, constraining the content width (using{' '}
      <TextLink href="/components/ContentBlock">ContentBlock</TextLink>) while
      establishing common screen gutters on smaller devices.
    </Text>
  ),
  alternatives: [
    {
      name: 'ContentBlock',
      description: 'For controlled width layout blocks',
    },
  ],
  additional: [
    {
      label: 'Maximum width',
      description: (
        <Text>
          Use the <Strong>width</Strong> prop to adjust the maximum width of the
          page container. Choose from either <Strong>medium</Strong> or{' '}
          <Strong>large</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <PageBlock width="medium">
            <Placeholder height={100} />
          </PageBlock>,
        ),
    },
    {
      label: 'Screen gutters',
      description: (
        <>
          <Text>
            Establishes consistent responsive gutters between the content and
            the screen edge.
          </Text>
          <Text>
            Uses <Strong>{gutters.mobile}</Strong> space on{' '}
            <TextLink href="/css/breakpoints">mobile</TextLink> and the semantic{' '}
            <Strong>{gutters.tablet}</Strong> on{' '}
            <TextLink href="/css/breakpoints">tablet</TextLink> and above.
          </Text>
        </>
      ),
      playroom: false,
      code: false,
      Example: () =>
        source(
          <Box background="formAccent">
            <PageBlock width="medium">
              <Box background="surface">
                <Placeholder height={100} />
              </Box>
            </PageBlock>
          </Box>,
        ),
    },

    {
      label: 'Custom semantics',
      description: (
        <Text>
          The HTML tag can be customised to ensure the underlying document
          semantics are meaningful. This can be done using the{' '}
          <Strong>component</Strong> prop and supports{' '}
          {validPageBlockComponents.map((c, i) => {
            const notLastTwo = validPageBlockComponents.length - 2;
            const joiningLastElements = i === notLastTwo ? ' and ' : '.';

            return (
              <Fragment key={c}>
                <Strong>{c}</Strong>
                {c === 'div' ? ' (default)' : ''}
                {i < notLastTwo ? ', ' : joiningLastElements}
              </Fragment>
            );
          })}
        </Text>
      ),
    },
  ],
};

export default docs;
