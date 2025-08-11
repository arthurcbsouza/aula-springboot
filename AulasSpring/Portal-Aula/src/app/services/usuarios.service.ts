import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseEnvelope} from "../dto/internal/ResponseEnvelope";
import {ServiceBase} from "./base/service.base.service";

@Injectable({
  providedIn: "root",
})
export class UsuariosService extends ServiceBase  {

  public override getUrl(): string {
    return 'http://localhost:8080';
  }

  public logon() : Observable<string> {
    return this.invokeBackend(this.mountUrl(['basic','logon']), { responseType : 'text'});
  }

  public logoff() : Observable<string> {
    return this.invokeBackend(this.mountUrl(['basic','logoff']), { responseType : 'text'});
  }

}
