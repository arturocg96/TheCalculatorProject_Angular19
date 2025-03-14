import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CalculatorModel } from '../../models/calculator.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-the-form-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './the-form-calculator.component.html',
  styleUrl: './the-form-calculator.component.css'
})
export class TheFormCalculatorComponent implements OnInit {

  @Input() calculator: CalculatorModel | undefined;

  calculatorForm!: FormGroup;
  result?: number;
  active: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      numberA: ['', Validators.required],
      numberB: ['', Validators.required]
    });
  }

  calculate(): void {
    if (!this.calculator || this.calculatorForm.invalid) return;

    const { numberA, numberB } = this.calculatorForm.value;
    this.result = this.calculator.calculate(numberA, numberB);
    this.active = false;
  }

  reset(): void {
    this.active = true;
    this.calculatorForm.reset();
    this.result = undefined;
  }
 
}