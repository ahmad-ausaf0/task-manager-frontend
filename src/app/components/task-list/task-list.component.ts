import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  addTask() {
    if (!this.newTask.trim()) return;
    
    this.taskService.addTask(this.newTask).subscribe((task) => {
      this.tasks.push(task); 
      this.newTask = '';
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }
}

