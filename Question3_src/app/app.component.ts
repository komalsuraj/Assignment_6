import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  styles: `.ChangeColor {
    color : blue;
  }`,
  template: `<h1 [class]=' "ChangeColor" '>Marvellous Infosystems</h1>
      <input [(ngModel)]="title" type="text">
      <h2>{{title}}</h2>`
})
export class AppComponent {
  public title = '';
}
