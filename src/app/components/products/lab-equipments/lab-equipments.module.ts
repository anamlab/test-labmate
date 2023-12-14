import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LabEquipmentsRoutingModule } from './lab-equipments-routing.module';
import { LabSuppliesRoutingModule } from '../lab-supplies/lab-supplies-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LabEquipmentsRoutingModule,
    LabSuppliesRoutingModule,
    RouterModule
  ]
})
export class LabEquipmentsModule { }
