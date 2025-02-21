import { Component } from '@angular/core';
import { TodoPageComponent } from "./todos/todo-page/todo-page.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TodoAPP';
}
