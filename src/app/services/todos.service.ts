import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodoId(id: number) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    return this.http.get(url);
  }
}
