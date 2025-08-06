export class ResponseEnvelope {

  private _object : any | undefined;

  private _success : boolean | undefined;

  private _message : string | undefined;


  get object(): any {
    return this._object;
  }

  set object(value: any) {
    this._object = value;
  }

  get success(): boolean | undefined {
    return this._success;
  }

  set success(value: boolean | undefined) {
    this._success = value;
  }

  get message(): string | undefined {
    return this._message;
  }

  set message(value: string | undefined) {
    this._message = value;
  }
}
