import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoService } from './services/todo.service';
import { TodoInputComponent } from './components/todo-input/todo-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
