import {Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {BasicService} from "../../services/basic.service";
import {UsuariosService} from "../../services/usuarios.service";
import {ResponseEnvelope} from "../../dto/internal/ResponseEnvelope";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() butonClick: () => void = () => {};

  @Input() closeClick: (name : string) => void = (s) => {};

  @Input() closeClickValue : string = '';

  @Input() styleClass : string = 'header';

  @Input() buttonText : string | undefined;

  title: string | undefined;

  counter : number = 0;

  callBack : any | undefined;

  message : string | undefined;

  isLogged = new BehaviorSubject<boolean | null>(false);

  public isUserLogged$ = this.isLogged.asObservable();

  userSessionLogged : Subscription | undefined;

  loggedMessage : string = "Not logged in";

  constructor(private basic : BasicService, private usuariosService : UsuariosService, private router : Router) {

  }

  ngOnInit() {
    this.userSessionLogged = this.isUserLogged$.subscribe((value : boolean | null) => {
      if (value == true) {
        this.loggedMessage = "Usuario conectado";
      } else {
        this.loggedMessage = "Usuario desconectado";
      }
      // Grava nbo contexto do navegador
      localStorage.setItem("userSessionLogged", JSON.stringify(value));
      // Grava no contexto da aba aberta dop navegador
      sessionStorage.setItem("userSessionLogged", JSON.stringify(value));
    });
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    if ( this.userSessionLogged !== null ) {
      this.userSessionLogged?.unsubscribe();
    }
  }

  logon() : void {
    this.usuariosService.logon().subscribe({
      next: (value : string)=> {
        this.isLogged.next(true);
      },
      error: error => { console.log(error);}
    });
  }

  logoff() : void {
    this.usuariosService.logoff().subscribe({
      next: (value : string)=> {
        this.isLogged.next(false);
      },
      error: error => { console.log(error);}
    });
  }

  protected async navigateTo(route : string) {
    await this.router.navigate([route]);
  }

  protected async navigateWithParams(route : string, params : string) {
    this.message = params;
    await this.router.navigate([route, this.message]);
  }

  protected internalClickHandler() : void {
    this.butonClick();
  }

  protected internalCloseHandler(param : string) : void {
    this.closeClick(param);
  }

  executeClick() : void {
    if (this.callBack === undefined) {
      this.callBack = setInterval(() => {
        this.title = `Titulo numero ${this.counter++}`;
      }, 1000);
    } else {
      clearInterval(this.callBack);
      this.callBack = undefined;
    }
  }



}
