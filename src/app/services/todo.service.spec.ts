import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add task to todo', () => {
    const task = 'Hello';
    expect(service.todo.length).toEqual(0);
    service.add(task);
    expect(service.todo.length).toEqual(1);
    expect(service.todo[0]).toEqual(task);
  });

  it('should delete task from todo', () => {
    const task = 'Hello';
    expect(service.todo.length).toEqual(0);
    service.add(task);
    expect(service.todo.length).toEqual(1);
    service.remove(task);
    expect(service.todo.length).toEqual(0);
  });

  it('should note delete task from todo', () => {
    const task = 'Hello';
    expect(service.todo.length).toEqual(0);
    service.add(task);
    expect(service.todo.length).toEqual(1);
    service.remove('World');
    expect(service.todo.length).toEqual(1);
    expect(service.todo[0]).toEqual(task);
  });

});
