/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './footer.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Footer size.
 */
export enum FOOTER_SIZE {
  /**
   * Regular size.
   */
  REGULAR = '',

  /**
   * Short size.
   */
  SHORT = 'short',
}

/**
 * The top-level element in footer.
 *
 * @element dds-footer
 */
@customElement(`${ddsPrefix}-footer`)
class DDSFooter extends StableSelectorMixin(LitElement) {
  /**
   * Footer size.
   */
  @property({ reflect: true })
  size = FOOTER_SIZE.REGULAR;

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'footer');
    }
    super.connectedCallback();
  }

  render() {
    return html`
      <section class="${prefix}--footer__main">
        <div class="${prefix}--footer__main-container">
          <slot name="brand"></slot>
          <slot></slot>
          <slot name="locale-button"></slot>
        </div>
      </section>
      <slot name="legal-nav"></slot>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--footer`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSFooter;
