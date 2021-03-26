import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationFormComponent } from './evaluation-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { EvaluationRoutingModule } from './evaluation-routing.module';

@NgModule({
  declarations: [EvaluationFormComponent],
  imports: [CommonModule, FormsModule, MaterialModule, EvaluationRoutingModule],
})
export class EvaluationFormModule {}
