import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []
  public title: string  = 'Define sua lista de tarefas'

  constructor(){
    
    this.todos.push('Gravar bootcamp')
    this.todos.push('Gravar podcast')
    this.todos.push('Gravar curso de vue js')

  }
}
