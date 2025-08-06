import { Component } from '@angular/core';
import {BasicService} from "./services/basic.service";
import {BasicClass} from "./dto/BasicClass";
import {ResponseEnvelope} from "./dto/internal/ResponseEnvelope";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined = 'Portal-Aula';

  constructor(private basic : BasicService) {
  }

  executeClick() : void {
    /*
    this.basic.getUserMessage().subscribe((msg : string) => {
      this.title = msg;
    });
    */
    /*
    this.basic.getUserObject("Arthur").subscribe((element : BasicClass) => {
      this.title = JSON.stringify(element);
    });
    */
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
