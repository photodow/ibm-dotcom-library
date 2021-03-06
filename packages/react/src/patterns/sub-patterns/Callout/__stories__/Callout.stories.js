import './index.scss';
import Callout from '../Callout';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Patterns (Sub-Patterns)|Callout', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })

  .add('Simple example', () => {
    const children = <p style={{ color: 'white' }}>hello world</p>;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-8 bx--col-lg-12 bx--offset-lg-4">
            <Callout children={children} />
          </div>
        </div>
      </div>
    );
  });
