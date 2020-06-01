import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembretes } from '../../interfaces/lembretes';
import { LembreteService } from '../../services/lembrete.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembretes[];
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembretes[]) => {
        this.lembretes = lembretes;
      }, () => {this.errorMsgComponent.setError('Falha ao buscar lembretes.'); });
  }

  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => {this.errorMsgComponent.setError('Falha ao deletar lembrete.'); });
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }
}
