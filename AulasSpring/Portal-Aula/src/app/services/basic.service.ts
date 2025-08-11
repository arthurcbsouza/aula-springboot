import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ResponseEnvelope} from "../dto/internal/ResponseEnvelope";
import {ServiceBase} from "./base/service.base.service";

@Injectable({
  providedIn: "root",
})
export class BasicService extends ServiceBase {

  public override getUrl(): string {
    return 'http://localhost:8080';
  }

  public getUserMessage() : Observable<string> {
    return this.invokeBackend(this.mountUrl(['basic','message']), { responseType : 'text'});
  }

  public getUserObject(userName : string) : Observable<ResponseEnvelope> {
    return this.invokeBackend(this.mountUrl(['basic','getUserObject']), { params: new HttpParams().set('userName', userName) });
  }
}
