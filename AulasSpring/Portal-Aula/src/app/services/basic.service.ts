import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ResponseEnvelope} from "../dto/internal/ResponseEnvelope";

@Injectable({
  providedIn: "root",
})
export class BasicService {

  private BACKEND_URL : string = 'http://localhost:8080';

  public BACKEND_MESSAGE_URL= 'message';

  constructor (private http : HttpClient) {
  }

  public getUserMessage() : Observable<string> {
    return this.http.get('http://localhost:8080/basic/message', { responseType : 'text'});
  }

  public getUserObject(userName : string) : Observable<ResponseEnvelope> {
    const requestParams = new HttpParams().set('userName', userName);
    return this.http.get<ResponseEnvelope>('http://localhost:8080/basic/getUserObject', {params: requestParams});
  }
}
