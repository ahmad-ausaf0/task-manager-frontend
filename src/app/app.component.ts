import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  
}
