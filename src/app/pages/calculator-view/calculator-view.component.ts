import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  #activeRoute = inject(ActivatedRoute);
  #calculatorService = inject(CalculatorService);
  #router = inject(Router);
  calculator: CalculatorModel | undefined;



  ngOnInit() {
    this.#activeRoute.params.subscribe((params: Params) => {
      let id: number = Number(params['id']);
  
      if (isNaN(id) || !this.#calculatorService.getCalculator(id)) {
        this.#router.navigate(['/calculators']);
        return;
      }
  
      this.calculator = this.#calculatorService.getCalculator(id);
    });
  }
  
}