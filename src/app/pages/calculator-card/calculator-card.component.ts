import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalculatorModel } from '../../models/calculator.model';


@Component({
  selector: 'app-calculator-card',
  imports: [RouterLink],
  templateUrl: './calculator-card.component.html',
  styleUrl: './calculator-card.component.css'
})
export class CalculatorCardComponent {
  @Input() calculator!: CalculatorModel;
  

  
}