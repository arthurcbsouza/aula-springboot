import {Observable} from "rxjs";

export interface IService {

  getUrl (): string;

  mountUrl(target : string[]) : string;

  invokeBackend<T>(url : string, args : any) : Observable<T>;
}
