import {IService} from "./iservice.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export abstract class ServiceBase implements IService {

  readonly URL : string = 'http://localhost:8080';

  protected constructor (private http : HttpClient) {
  }

  public abstract getUrl(): string;

  public mountUrl(target: string[]): string {
    return `${this.URL}/${target.join('/')}`;
  }

  public invokeBackend<T>(url : string, args : any) : Observable<T> {
    return this.http.get(this.mountUrl(['basic','logoff']), { responseType : 'text'}) as unknown as Observable<T>;
  }
}
