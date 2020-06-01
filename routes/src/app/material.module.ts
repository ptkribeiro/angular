import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [ ],
  exports: [
    MatAutocompleteModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
