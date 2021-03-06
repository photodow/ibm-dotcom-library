import './index.scss';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { ArrowRight20 } from '@carbon/icons-react';
import { ButtonGroup } from '../../../patterns/sub-patterns/ButtonGroup';
import { ExpressiveModal } from '../';
import { ModalBody } from 'carbon-components-react';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

/**
 * Dummy content for the modal story
 *
 * @returns {object} JSX object
 */
function dummyContent() {
  const title = text('Title (placeholder)', 'Lorem ipsum dolor sit amet');
  const paragraph = text(
    'Paragraph (placeholder)',
    'Quisque felis odio, egestas vel tempus iaculis, interdum vel eros. Phasellus pharetra, purus et pretium posuere, ipsum risus pulvinar leo, non rutrum tortor risus vitae quam. Nulla sed nibh felis. Maecenas nec tincidunt eros. Fusce sollicitudin sit amet quam eu fringilla. Donec tincidunt ut nisi vitae pharetra. Curabitur imperdiet ante sit amet mi laoreet, vitae facilisis ante convallis. Aenean quis dapibus augue. Sed nisl dui, scelerisque et augue eget, pharetra commodo elit. In venenatis sapien eu nisl congue suscipit.'
  );
  const button = text('Button (placeholder)', 'Lorem ipsum dolor');

  return (
    <div>
      {title ? <h1 style={{ marginBottom: '16px' }}>{title}</h1> : null}
      {paragraph ? <p style={{ marginBottom: '48px' }}>{paragraph}</p> : null}
      {button ? (
        <ButtonGroup
          buttons={[
            {
              href: '',
              copy: button,
              renderIcon: ArrowRight20,
            },
          ]}
        />
      ) : null}
    </div>
  );
}
storiesOf('Components|Expressive Modal', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Default', () => {
    return (
      <>
        <ExpressiveModal
          open={boolean('Toggle modal', true)}
          className="bx--modal--expressive">
          <ModalBody>{dummyContent()}</ModalBody>
        </ExpressiveModal>
      </>
    );
  })
  .add('Expanded', () => {
    return (
      <>
        <ExpressiveModal
          open={boolean('Toggle modal', true)}
          fullwidth={true}
          className="bx--modal--expressive">
          <ModalBody>{dummyContent()}</ModalBody>
        </ExpressiveModal>
      </>
    );
  });
