/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ArrowDown20, ArrowRight20, Launch20 } from '@carbon/icons-react';
import { ButtonGroup } from '../../patterns/sub-patterns/ButtonGroup';
import { CardLink } from '../../patterns/sub-patterns/CardLink';
import { FeaturedLink } from '../../patterns/blocks/FeaturedLink';
import { LinkWithIcon } from '../LinkWithIcon';
import PropTypes from 'prop-types';
import React from 'react';

const heading = 'How is artificial intelligence used today in your industry?';

const cardheading = 'Explore AI use cases in all industries';

const cardhref = 'https://www.example.com';
const images = {
  defaultImage: 'https://picsum.photos/id/2/672/672',
  alt: 'featured link image',
};

/**
 * CTA component
 *
 * @param {object} props props object
 * @param {string} props.style style ( text | card | button | feature ).
 * @param {object} props.type tyle ( jump | local | external ).
 * @param {object} props.cta cta object which includes url, link text and target properties.
 * @returns {*} CTA Component
 */
const CTA = ({ style, type, cta }) =>
  style === 'card' ? (
    <CardLink
      title={cta.text}
      href={cta.href}
      target={cta.target}
      icon={iconSelector(type)}
    />
  ) : style === 'button' ? (
    <ButtonGroup
    //  buttons={renderButton(type, cta)}
    />
  ) : style === 'feature' ? (
    <FeaturedLink
      heading={heading}
      card={{
        title: cardheading,
        image: images,
        href: cardhref,
      }}
    />
  ) : (
    <LinkWithIcon href={cta.href} target={cta.target}>
      {cta.text}
      {iconSelector(type)}
    </LinkWithIcon>
  );

/**
 * sets the class name based on link type
 *
 * @param {string} type cta type ( external | jump | local)
 * @returns {*} cta type component
 */
const iconSelector = type =>
  type === 'external' ? (
    <Launch20 />
  ) : type === 'jump' ? (
    <ArrowDown20 />
  ) : (
    <ArrowRight20 />
  );

// const renderButton = (cta, type) => (
//   cta.map((obj) => {
//     obj.renderIcon = iconSelector(type)
//     console.log('renderButton', obj)
//     return obj;
//   })
// )

CTA.propTypes = {
  // cta: PropTypes.shape({
  //   href: PropTypes.string,
  //   text: PropTypes.string,
  //   target: PropTypes.string,
  // }),
  cta: PropTypes.array,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default CTA;
