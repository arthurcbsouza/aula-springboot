import {AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {BasicService} from "./services/basic.service";
import {ResponseEnvelope} from "./dto/internal/ResponseEnvelope";
import {HeaderBarComponent} from "./components/header-bar/header-bar.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  title: string | undefined = 'Portal-Aula';

  headerText : string = "Nulo";

  headerLogged : string = "Not logged in";

  userSessionLogged : Subscription | undefined;

  @ViewChild('mainHeader', { static : true }) header!: HeaderBarComponent;

  @ViewChild('mainFooter', { static : true }) footer!: HeaderBarComponent;

  constructor(private basic : BasicService, private router : Router) {
  }

  atualizarTexto(valor : string) {
    this.headerText = valor;
  }

  cancelar(cancel : boolean) {
    if (cancel === true) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.header.buttonText = "text";
    this.userSessionLogged = this.header.isUserLogged$.subscribe(isLogged => {
      if (isLogged == true) {
        this.headerLogged = "Usuario conectado on header";
      } else {
        this.headerLogged = "Usuario desconectado on header";
      }
    })
  }

  ngOnDestroy() {
    if ( this.userSessionLogged !== null ) {
      this.userSessionLogged?.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
  }

  topHeaderClick() : void {
    alert('Mensagem');
  }

  bottomHeaderClick(param : string) : void {
    alert(param);
  }

  executeClick() : void {
    this.basic.getUserObject("Arthur2").subscribe({
      next: (element : ResponseEnvelope)=> {
        if (element.success) {
          this.title = JSON.stringify(element.object);
        } else {
          this.title = element.message;
        }
      },
      error: error => { console.log(error);}
    });
  }
}
