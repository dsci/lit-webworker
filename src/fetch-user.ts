export class FetchUser {
  constructor() {}

  public fetchUsers(cb) {
    return fetch('/users').then((usersResponse) => {
      usersResponse.json().then((json: any) => {
        console.log(cb);
        cb(json);
      });
    });
  }

  public async easyFetchUser() {
    return await fetch('/users');
  }
}
