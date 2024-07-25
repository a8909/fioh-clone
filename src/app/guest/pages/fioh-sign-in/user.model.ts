export class Users {
  constructor(public userId: number, private _token: string) {}
  get token() {
    return this._token;
  }
}
