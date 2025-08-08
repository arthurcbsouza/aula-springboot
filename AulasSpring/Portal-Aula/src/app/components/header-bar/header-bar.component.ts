import {Component, Input} from '@angular/core';
import {BasicService} from "../../services/basic.service";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {

  @Input() butonClick: () => void = () => {};

  @Input() closeClick: (name : string) => void = (s) => {};

  @Input() closeClickValue : string = '';

  @Input() styleClass : string = 'header';

  @Input() buttonText : string | undefined;

  title: string | undefined;

  counter : number = 0;

  callBack : any | undefined;

  constructor(private basic : BasicService) {

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
