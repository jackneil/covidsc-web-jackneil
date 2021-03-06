import { LitElement, html, css } from 'lit-element';

// TODO: move these dependencies out of here
// UNUSED // import { google } from '@google/maps';

import '@material/mwc-button';
import { IronFlex, IronFlexAlignment } from './flex-styles.js';

export class CovidScDataCard extends LitElement {
  constructor() {
    super();
    // redundant placeholder
    this.title = '';
    this.value = '';
    this.delta = '';
  }

  static get properties() {
    return {
      title: { type: String },
      value: { type: String },
      delta: { type: String },
    };
  }

  static get styles() {
    return [
      IronFlex,
      IronFlexAlignment,
      css`
        :host([ghost]) {
          height: 0px;
          /* margin: 6px 8px; */
        }
        :host([ghost]) > .content {
          display: none;
        }
        :host {
          border-radius: 4px;
          background-color: #f0f0f0;
          /* margin: 6px 8px; */
          overflow: hidden;
          font-family: Roboto;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: var(--Primary-Text-Color);
        }
        .title {
          height: 32px;
          line-height: 32px;
          background-color: var(--Background-Color-Dark);
        }
        .value {
          color: var(--Primary-Text-Color);
        }
        .delta {
          color: var(--Secondary-Text-Color);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="layout vertical flex content" style="height: 100%;">
        <div class="layout vertical flex">
          <div class="title"><center>${this.title}</center></div>
          <div class="layout vertical flex center-justified">
            <div class="value"><center>${this.value}</center></div>
            <div class="delta"><center>${this.delta}</center></div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {}
}

customElements.define('covid-sc-data-card', CovidScDataCard);
