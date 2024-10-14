
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StudentListComponent} from './components/student-list/student-list.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';


const routes: Routes = [
  {path: 'student-list', component: StudentListComponent},
  {path: 'employee-list', component: EmployeeListComponent},



]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations:[
    AppComponent,
    StudentListComponent,
    EmployeeListComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
