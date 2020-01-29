import './index.scss';
import { select, withKnobs } from '@storybook/addon-knobs';
import CTA from '../Cta';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';
// import { ArrowDown20, ArrowRight20, Pdf20 } from '@carbon/icons-react';

storiesOf('Components|CTA', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('CTA', () => {
    const cta = {
      href: 'https://www.ibm.com',
      text: 'Nunc Pulvinar Nisi',
      target: '_blank',
    };

    const style = {
      card: 'card',
      text: 'text',
      feature: 'feature',
      button: 'button',
    };

    const type = {
      jump: 'jump',
      local: 'local',
      external: 'external',
    };

    // const iconMap = {
    //   ArrowRight20,
    //   ArrowDown20,
    //   Pdf20,
    // };

    // const icons = {
    //   ArrowRight: 'ArrowRight20',
    //   ArrowDown: 'ArrowDown20',
    //   Pdf: 'Pdf20',
    //   none: null,
    // };

    // const buttons = [
    //   {
    //     link: '',
    //     copy: 'Primary action button',
    //     renderIcon:
    //       iconMap[icons.ArrowRight],
    //     href: 'https://www.example.com',
    //   },
    //   {
    //     link: '',
    //     copy: 'Secondary action button',
    //     renderIcon:
    //       iconMap[icons.ArrowRight],
    //     href: 'https://www.example.com',
    //   },
    // ];

    return (
      <CTA
        // cta={object('cta', cta)}
        cta={cta}
        type={select('type', type, type.local)}
        style={select('style', style, style.text)}
        // buttons={buttons}
      />
    );
  });
