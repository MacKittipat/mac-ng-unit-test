import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: string[] = [];

  constructor() { }

  add(task: string): void {
    this.todo.push(task);
  }

  remove(task: string): void {
    this.todo.forEach((item, index) => {
      if (item === task) {
        this.todo.splice(index, 1);
      }
    });
  }
}
