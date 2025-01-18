import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {CommonModule} from '@angular/common';
import {registerFormControls} from './constants/register-form.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'dynamic-json-formbuilder';
  registerFormControls =  registerFormControls

  ngOnInit(): void {
  }

}
