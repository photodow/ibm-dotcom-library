/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import { Link } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * LinkWithIcon component
 *
 * @param {object} props react proptypes
 * @param {object} props.children User content
 * @param {string} props.href Link url
 * @returns {*} LinkWithIcon component
 */
const LinkWithIcon = ({ children, href, ...props }) => {
  return (
    <div
      className={`${prefix}--link-with-icon__container`}
      data-autoid={`${stablePrefix}--link-with-icon`}>
      <Link href={href} className={`${prefix}--link-with-icon`} {...props}>
        {children}
      </Link>
    </div>
  );
};

/**
 * @property {object} propTypes LinkWithIcon propTypes
 * @description Defined property types for component
 *
 * @type {{children: Array, href: string}}
 */
LinkWithIcon.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
};

/**
 * @property {object} defaultProps LinkWithIcon default props
 * @type {{children: [], href: string}}
 */
LinkWithIcon.defaultProps = {
  children: [],
  href: '',
};

export default LinkWithIcon;
