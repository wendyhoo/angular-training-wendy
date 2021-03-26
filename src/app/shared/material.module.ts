import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule],
  exports: [MatInputModule, MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaterialModule {}
