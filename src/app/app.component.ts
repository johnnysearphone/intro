/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
}*/
import { Component, Input } from '@angular/core';

@Component({
   selector: 'intro',
   template: `<h1>Introduction to {{productName}}!</h1>`,
   styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent  {
  @Input() productName: string;
}