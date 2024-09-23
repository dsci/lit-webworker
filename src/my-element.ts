import { LitElement, unsafeCSS, html } from 'lit';
import { until } from 'lit/directives/until.js';
import { customElement, property } from 'lit/decorators.js';
import litLogo from './assets/lit.svg';
import viteLogo from '/vite.svg';

//@ts-ignore;
import styles from './my-element.css?inline';

import { FetchUser } from './fetch-user';

import './user-component.ts';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  constructor(private readonly _fetchUserService = new FetchUser()) {
    super();
  }

  static styles = unsafeCSS(styles);

  @property()
  userCount: number | undefined;

  users: any[] = [];

  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  connectedCallback() {
    super.connectedCallback();
    //this._fetchUserService.fetchUsers((json: any) => this.handleResponse(json));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  handleResponse(json: any) {
    this.userCount = json['users'].length;
    this.users = json['users'];
  }

  render() {
    return html`
      <div>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <div><button @click=${this.getUsers}>Fetch Users</button></div>
      <p class="read-the-docs">${this.docsHint}</p>
        ${this.renderUserCount()}
    `;
  }
  /*
  <tr>
  <td>${user.uuid}</td>
  <td>${user.firstName}</td>
  <td>${user.lastName}</td>
  <td>${user.birthday.toString()}</td>
  <td>${user.favouriteMusicGenre}</td>
</tr>
*/
  renderUserCount() {
    return html`<div>
      ${until(this.userCount, 'foo')}
      <p>Count:</p>
      <table>
        <tbody>
        ${until(
          this.users.map((user) => {
            return html`
              <user-component name="${user.firstName}" birthday="${user.birthday}" ></user-component>
          `;
          })
        )}
        </tbody>

      </table>
      <p>
    </div>`;
  }

  private getUsers() {
    const myWorker = new Worker(new URL("fetch-worker.js", import.meta.url));
    myWorker.postMessage({ action: "fetchUser"});
    myWorker.onmessage = (e) => {
      this.users = e.data.users;
      console.log(this.users);
      this.requestUpdate();
    }
  }

  private _onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
