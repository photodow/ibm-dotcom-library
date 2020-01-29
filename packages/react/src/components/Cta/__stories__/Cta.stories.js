import './index.scss';
import { object, select, withKnobs } from '@storybook/addon-knobs';
import CTA from '../Cta';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('Components|CTA', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('CTA', () => {
    const type = ['local', 'jump', 'external'];
    // const style = {
    //   card: 'card',
    //   text: 'text',
    //   feature: 'feature',
    //   buttons: 'button',
    // };

    // const cta = {
    //   href: 'https://www.ibm.com',
    //   text: 'Nunc Pulvinar Nisi',
    //   target: '_blank',
    // }
    const data = {
      text: {
        copy: 'Nunc Pulvinar Nisi',
        href: 'https://www.ibm.com',
        type: type[1],
      },
      card: {
        href: 'https://www.ibm.com',
        title: 'Nunc Pulvinar Nisi',
        type: type[1],
      },
      feature: {
        heading: 'Nunc Pulvinar Nisi',
        card: {
          href: 'https://www.ibm.com',
          title: 'Nunc Pulvinar Nisi',
          type: type[1],
          image: {
            defaultImage: 'https://picsum.photos/id/2/672/672',
            alt: 'featured link image',
          },
        },
      },
      button: [
        {
          href: 'https://www.ibm.com',
          copy: 'Nunc Pulvinar Nisi',
          type: type[1],
        },
        {
          href: 'https://www.example.com',
          copy: 'Nunc Pulvinar Nisi',
          type: type[1],
        },
      ],
    };
    const styles = Object.keys(data);
    const style = select('style', styles, styles[0]);
    const ctaData = object(`Data (${style})`, JSON.stringify(data[style]));
    console.log('Button', ctaData);
    //  const data = object(`Data (${stye})`, date[style])
    // cta[ctaType] = data;

    return (
      <CTA
        // cta={select('ctaType', cta, cta.card)}
        //type={select('type', type, type.local)}
        style={style}
        cta={data.button}
        // buttons={buttons}
      />
    );
  });
