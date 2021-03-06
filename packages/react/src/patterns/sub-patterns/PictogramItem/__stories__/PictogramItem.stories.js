import './index.scss';

import { Desktop, Pattern, Touch } from '@carbon/pictograms-react';
import { text, withKnobs, select } from '@storybook/addon-knobs';
import PictogramItem from '../PictogramItem';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('Patterns (Sub-Patterns)|PictogramItem', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Default', () => {
    const heading = text('Heading (required)', 'Lorem ipsum dolor sit');

    const copy = text(
      'Copy (required)',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    );

    const pictograms = {
      Desktop: 'Desktop',
      Touch: 'Touch',
      Pattern: 'Pattern',
    };

    const pictogram = select(
      'Pictogram (required)',
      pictograms,
      pictograms.Desktop
    );

    const cta = {
      type: 'local',
      href: 'https://www.example.com',
      copy: 'Lorem ipsum dolor',
    };

    /**
     * Returns the react component based on the value in the pictogram variables
     *
     * @param {string} sel string that defines the returning pictogram
     * @returns {*} JSX pictogram component
     */
    const selectPictogram = sel => {
      switch (sel) {
        case 'Desktop':
          return Desktop;
        case 'Pattern':
          return Pattern;
        case 'Touch':
          return Touch;
      }
    };

    const selected = {
      src: selectPictogram(pictogram),
      'aria-label': text('Aria-label:', 'Pictogram description'),
    };

    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4">
            <PictogramItem
              heading={heading}
              copy={copy}
              pictogram={selected}
              cta={cta}
            />
          </div>
        </div>
      </div>
    );
  });
