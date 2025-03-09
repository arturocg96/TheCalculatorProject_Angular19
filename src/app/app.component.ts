import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheNavbarComponent } from "./components/the-navbar/the-navbar.component";
import { TheAsideComponent } from "./components/the-aside/the-aside.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TheNavbarComponent, TheAsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TheCalculatorProject_Angular19';
}
