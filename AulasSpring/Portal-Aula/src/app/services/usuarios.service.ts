import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseEnvelope} from "../dto/internal/ResponseEnvelope";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {

  private BACKEND_URL : string = 'http://localhost:8080';

  public BACKEND_MESSAGE_URL= 'message';

  constructor (private http : HttpClient) {
  }

  public logon() : Observable<string> {
    return this.http.get('http://localhost:8080/basic/logon', { responseType : 'text'});
  }

  public logoff() : Observable<string> {
    return this.http.get('http://localhost:8080/basic/logoff', { responseType : 'text'});
  }

}
