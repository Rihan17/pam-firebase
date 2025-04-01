import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarConsultaPageRoutingModule } from './marcar-consulta-routing.module';

import { MarcarConsultaPage } from './marcar-consulta.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MarcarConsultaPageRoutingModule
  ],
  declarations: [MarcarConsultaPage]
})
export class MarcarConsultaPageModule {}
