import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {
  dvds$: Observable<Dvd[]>;
  constructor(private dvdService: DvdService) { }

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvds$;
  }

}
