import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Lembretes } from '../../interfaces/lembretes';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent {
  @Input() lembrete: Lembretes = {} as Lembretes;
  @Output() outputLembrete: EventEmitter<Lembretes> = new EventEmitter();

  onSubmit() {
    this.outputLembrete.emit(this.lembrete);
  }

}
