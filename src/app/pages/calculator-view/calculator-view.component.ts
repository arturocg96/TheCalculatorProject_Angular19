import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CalculatorService } from '../../services/calculator.service';
import { CalculatorModel } from '../../models/calculator.model';
import { TheButtonComponent } from "../../components/the-button/the-button.component";
import { TheFormCalculatorComponent } from "../../components/the-form-calculator/the-form-calculator.component";

@Component({
  selector: 'app-calculator-view',
  imports: [TheFormCalculatorComponent,TheButtonComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {

  private activeRoute = inject(ActivatedRoute);
  calculator: CalculatorModel | undefined;

constructor(private calculatorService: CalculatorService) { }

ngOnInit() {
  this.activeRoute.params.subscribe((params: Params) => {
    let id:number = Number(params['id']);
    try {
      let response = this.calculatorService.getCalculator(id);
      this.calculator = response;
      console.log(this.calculator);
    } catch (error) {
      console.error(error);
    }
  })}




}


