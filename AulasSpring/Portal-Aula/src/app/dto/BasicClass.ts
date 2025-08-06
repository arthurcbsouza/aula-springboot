export class BasicClass {
  private _id : number | undefined;
  private _name : string | undefined;
  private _age : number | undefined;


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number | undefined {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
