import { Component, ViewChild } from '@angular/core';
import {ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembretes } from 'src/app/interfaces/lembretes';
@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {
  public lembrete: Lembretes;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(
    private lembreteService: LembreteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.getLembrete(this.activatedRoute.snapshot.params.id);
    }

  getLembrete(id: number){
    this.lembreteService.getLembrete(id)
      .subscribe(
        (lembrete: Lembretes) => { this.lembrete = lembrete; },
        () => { this.errorMsgComponent.setError('Falha ao buscar lembrete.'); });
  }

  atualizaLembrete(lembrete: Lembretes) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete.'); });
  }
}
