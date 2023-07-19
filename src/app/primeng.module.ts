import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  exports: [ButtonModule, TableModule, ToastModule, BrowserAnimationsModule],
})
export class PrimengModule {}
