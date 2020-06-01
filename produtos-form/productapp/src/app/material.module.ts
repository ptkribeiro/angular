import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [ ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
