export default class ProgramDTO{

  private _pid:String;
  private _name:String;
  private _description:string;
  private _start_date:Date;
  private _end_date:Date;


  constructor(pid: String, name: String, description: string, start_date: Date, end_date: Date) {
    this._pid = pid;
    this._name = name;
    this._description = description;
    this._start_date = start_date;
    this._end_date = end_date;
  }


  get pid(): String {
    return this._pid;
  }

  set pid(value: String) {
    this._pid = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get start_date(): Date {
    return this._start_date;
  }

  set start_date(value: Date) {
    this._start_date = value;
  }

  get end_date(): Date {
    return this._end_date;
  }

  set end_date(value: Date) {
    this._end_date = value;
  }
}
