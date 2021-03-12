import { Component, h, Host, State } from '@stencil/core';
import { User } from './user.model';

@Component({
  tag: 'ac-fetch-users',
  styleUrl: 'ac-fetch-users.css',
  shadow: true,
})
export class AcFetchUsers {
  @State() users: User[] = [];
  @State() loading: boolean = false;

  private onFetchUserButtonClick() {
    this.loading = true;
    // if (!this.users.length) {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          this.users = users;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = true;
        });
    }, 2000);

    // }
  }

  render() {
    let usersList: any;
    if (this.users.length) {
      usersList = (
        <ul>
          {this.users.map((user: User) => (
            <li>
              {user.username} - {user.name}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <Host>
        <button class="btn" onClick={this.onFetchUserButtonClick.bind(this)}>
          Fetch Users
        </button>
        {usersList ? (
          <div>
            <h1>Users List</h1>
            {usersList}
          </div>
        ) : (
          ''
        )}
        {this.loading ? <ac-spinner></ac-spinner> : ''}
      </Host>
    );
  }
}
