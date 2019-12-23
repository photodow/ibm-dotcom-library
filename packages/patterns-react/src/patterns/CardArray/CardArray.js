/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import CardArrayItem from './CardArrayItem';
import { DDS_CARD_ARRAY } from '../../internal/FeatureFlags';
import PropTypes from 'prop-types';
import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import { featureFlag } from '@carbon/ibmdotcom-utilities';
import { sameheight } from '@carbon/ibmdotcom-utilities';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Card Array Component
 *
 * @param {object} props props object
 * @param {string} props.title CardArray section title
 * @param {Array} props.content CardArray section content object array
 * @returns {*} CardArray JSX component
 */
const CardArray = ({ title, content }) => {
  const containerRef = useRef();

  useEffect(() => {
    sameheight(containerRef.current.children, 'md');
    window.addEventListener(
      'resize',
      sameheight(containerRef.current.children, 'md')
    );
  });

  return featureFlag(
    DDS_CARD_ARRAY,
    <section
      className={`${prefix}--cardarray`}
      data-autoid={`${stablePrefix}--cardarray`}>
      <div className={`${prefix}--cardarray__container`}>
        <div className={`${prefix}--cardarray__row`}>
          <div className={`${prefix}--cardarray__col`}>
            <h3 className={`${prefix}--cardarray__title`}>{title}</h3>
          </div>
          <div
            data-autoid={`${stablePrefix}--cardarray-group`}
            ref={containerRef}
            className={`${prefix}--cardarray__col ${prefix}--cardarray-group`}>
            {_renderCardArrayItems(content)}
          </div>
          <div className={`${prefix}--cardarray__divider__col`}>
            <div className={`${prefix}--cardarray__divider`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Renders the cards based on the ContentArray entries
 *
 * @param {Array} contentArray Content object array
 * @returns {*} CardArrayItem JSX objects
 */
const _renderCardArrayItems = contentArray =>
  contentArray.map(elem => (
    <CardArrayItem title={elem.title} copy={elem.copy} href={elem.href} />
  ));

CardArray.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

export default CardArray;
