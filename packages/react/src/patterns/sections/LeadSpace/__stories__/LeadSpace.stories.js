import './index.scss';
import { ArrowDown20, ArrowRight20, Pdf20 } from '@carbon/icons-react';
import {
  boolean,
  number,
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import LeadSpace from '../LeadSpace';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('Patterns (Sections)|LeadSpace', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Default with no image', () => {
    const copy = text(
      'copy',
      'Use this area for a short line of copy to support the title'
    );

    const title = text('title', 'Lead space title');

    const type = {
      left: '',
      small: 'small',
      centered: 'centered',
    };

    const iconMap = {
      ArrowRight20,
      ArrowDown20,
      Pdf20,
    };

    const iconOptions = {
      None: null,
      ArrowRight: 'ArrowRight20',
      ArrowDown: 'ArrowDown20',
      PDF: 'Pdf20',
    };

    const buttonCount = number('Number of buttons', 2);
    const buttons = [];

    for (let i = 0; i < buttonCount; i++) {
      buttons.push({
        copy: text(`Button ${i + 1}`, `Button ${i + 1}`),
        renderIcon:
          iconMap[
            select(`Button Icon ${i + 1}`, iconOptions, iconOptions.ArrowRight)
          ],
        href: text('Primary button link', 'https://www.example.com'),
      });
    }

    const themes = {
      g100: 'g100',
      white: '',
    };

    return (
      <LeadSpace
        type={select('type', type, type.small)}
        theme={select('theme', themes, themes.g100)}
        title={title}
        copy={copy}
        buttons={buttons}
      />
    );
  })
  .add('Default with image', () => {
    const copy = text(
      'copy',
      'Use this area for a short line of copy to support the title'
    );

    const title = text('title', 'Lead space title');

    const type = {
      left: '',
      small: 'small',
      centered: 'centered',
    };

    const images = {
      sources: [
        { src: 'https://picsum.photos/id/1076/320/370', breakpoint: 'sm' },
        { src: 'https://picsum.photos/id/1076/672/400', breakpoint: 'md' },
      ],
      defaultSrc: 'https://picsum.photos/id/1076/1056/480',
      alt: 'lead space image',
    };

    const iconMap = {
      ArrowRight20,
      ArrowDown20,
      Pdf20,
    };

    const iconOptions = {
      None: null,
      ArrowRight: 'ArrowRight20',
      ArrowDown: 'ArrowDown20',
      PDF: 'Pdf20',
    };

    const buttonCount = number('Number of buttons', 2);
    const buttons = [];

    for (let i = 0; i < buttonCount; i++) {
      buttons.push({
        link: '',
        copy: text(`Button ${i + 1}`, `Button ${i + 1}`),
        renderIcon:
          iconMap[
            select(`Button Icon ${i + 1}`, iconOptions, iconOptions.ArrowRight)
          ],
        href: text('Primary button link', 'https://www.example.com'),
      });
    }

    const themes = {
      g100: 'g100',
      white: '',
    };

    const gradient = boolean('gradient overlay', true);

    return (
      <LeadSpace
        type={select('type', type, type.small)}
        theme={select('theme', themes, themes.g100)}
        title={title}
        copy={copy}
        gradient={gradient}
        buttons={buttons}
        image={object('image', images)}
      />
    );
  });
