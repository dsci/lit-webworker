import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

//@ts-ignore;
import styles from './my-element.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('user-component')
export class UserComponent extends LitElement {
  @property()
  name: string = '';

  @property()
  birthday: Date = new Date();

  render() {
    return html`
      <div>
        <p>${this.name}</p>
        <p>${this.birthday}</p>
      </div>
    `;
  }
}
