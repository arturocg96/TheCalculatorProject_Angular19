import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CalculatorModel } from '../../models/calculator.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-the-form-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './the-form-calculator.component.html',
  styleUrl: './the-form-calculator.component.css'
})
export class TheFormCalculatorComponent {

  @Input() calculator: CalculatorModel | undefined; 
  
  private fb = inject(FormBuilder);
  calculatorForm!: FormGroup;
  result?: number; 

  constructor() {
    this.calculatorForm = this.fb.group({
      numberA: ['', [Validators.required]],
      numberB: ['',[Validators.required]]
    });

    
  }

  calculate() {
    if (!this.calculator || this.calculatorForm.invalid) return;

    const { numberA, numberB } = this.calculatorForm.value;
    this.result = this.calculator.calculate(numberA, numberB);
  }

  onEnter(event: KeyboardEvent) {
    event.preventDefault(); 
    if (!this.calculatorForm.invalid) {
      this.calculate(); 
    }
  }
}