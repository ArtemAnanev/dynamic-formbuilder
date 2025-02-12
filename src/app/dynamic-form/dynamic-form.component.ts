import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

const validatorMap = {
  required: (value: boolean) => value ? Validators.required : null,
  email: (value: boolean) => value ? Validators.email : null,
}

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  @Input() formControls!: any;

  fb = inject(FormBuilder);
  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    if (this.formControls) {
      let formGroup: any = {};
      this.formControls.forEach((control: any) => {
        let controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: any) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.email);
            if (val.validatorName === 'minLength') controlValidators.push(Validators.minLength);
            // add more validators if it needs
          })
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit(): void {
    console.log('Form valid: ', this.dynamicFormGroup.valid);
    console.log('Form values: ', this.dynamicFormGroup.value);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicFormGroup.get(control.name);

    for (let validation of control.validators) {
      if (formControl?.hasError(validation.validatorName)) {
        return validation.message;
      }
    }
    return ''
  }

}
