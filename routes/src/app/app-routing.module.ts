import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent},
  { path: 'dvds/:index', component: DvdDetailComponent},
  { path: 'books', component: BookComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dvds'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
