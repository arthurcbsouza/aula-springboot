import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrl: './first-form.component.css'
})
export class FirstFormComponent {

  @Input() headerText: string = "Formulario";

  @Output() tituloAlterado = new EventEmitter<string>();

  @Output() cancelOperation = new EventEmitter<boolean>();

  valor: string = "";

  pegarValorFormulario() {
    alert(this.valor);
  }

  setaValorFormulario() {
    this.valor = 'Arthur';
  }

  updateHeader() {
    this.headerText = this.valor;
  }

  avisarPai() {
    this.tituloAlterado.emit(this.valor);
  }

  cancelar() {
    this.cancelOperation.emit(true);
  }
}
