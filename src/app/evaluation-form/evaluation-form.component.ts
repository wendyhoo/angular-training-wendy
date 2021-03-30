import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss'],
})
export class EvaluationFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['Wendy', Validators.required],
      studentNo: [null, Validators.required],
      industryName: [null, Validators.required],
      industrySupervisor: [null, Validators.required],
      trainingDate: [null],
    });
  }

  submitForm() {
    if (this.form.status === 'INVALID') {
      alert('Form is invalid!');
      return;
    }
    console.log('FORM', this.form);
    console.log('VALUES', this.form.value);
  }
}
