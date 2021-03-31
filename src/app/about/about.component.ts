import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosModel } from '../model/todos.model';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  todoId: number;
  todoItem: TodosModel;
  allSubs: Subscription[] = [];

  constructor(private todosSvc: TodosService) {}

  ngOnInit(): void {
    this.todoId = 3;
    this.getTodos();
  }

  ngOnDestroy(): void {
    this.allSubs.forEach((sub: Subscription) => sub.unsubscribe());
  }

  getTodos() {
    const sub = this.todosSvc
      .getTodoId(this.todoId)
      .subscribe((res: TodosModel) => {
        this.populateTodoItem(res);
      });

    this.allSubs.push(sub);
  }
  populateTodoItem(item: TodosModel) {
    this.todoItem = item;
    console.log('RESULT', item);
  }
}
