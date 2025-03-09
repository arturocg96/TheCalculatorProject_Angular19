import { Routes } from '@angular/router';
import { CalculatorListComponent } from './pages/calculator-list/calculator-list.component';
import { CalculatorViewComponent } from './pages/calculator-view/calculator-view.component';

export const routes: Routes = [

    {path: 'calculators' , component: CalculatorListComponent},
    {path: 'calculator/:id' , component: CalculatorViewComponent},
    {path: "", pathMatch: 'full', redirectTo: 'calculators'},
    { path: "**", redirectTo: 'calculators' }
];

