import { Component, ViewChild } from '@angular/core';
import {ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Router } from '@angular/router';
import { Lembretes } from 'src/app/interfaces/lembretes';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private lembreteService: LembreteService, private router: Router) { }

  addLembrete(lembrete: Lembretes){
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao adicionar lembrete'); });
  }
  
}