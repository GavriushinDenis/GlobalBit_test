import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
