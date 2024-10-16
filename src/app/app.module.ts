
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StudentListComponent} from './components/student-list/student-list.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {FruitListComponent} from './components/fruit-list/fruit-list.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {CityListComponent} from './components/city-list/city-list.component';
import {BookListComponent} from './components/book-list/book-list.component';
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import {CarModelListComponent} from './components/car-model-list/car-model-list.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SubjectListComponent} from './components/subject-list/subject-list.component';
import {CountryListComponent} from './components/country-list/country-list.component';
import {SportsListComponent} from './components/sports-list/sports-list.component';
import {VegetableListComponent} from './components/vegetable-list/vegetable-list.component';



const routes: Routes = [
  {path: 'student-list', component: StudentListComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'fruit-list', component: FruitListComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'city-list', component: CityListComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'car-model-list', component: CarModelListComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'subject-list', component: SubjectListComponent},
  {path: 'country-list', component: CountryListComponent},
  {path: 'sports-list', component: SportsListComponent},
  {path: 'vegetable-list', component: VegetableListComponent},
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
    FruitListComponent,
    CourseListComponent,
    CityListComponent,
    BookListComponent,
    MovieListComponent,
    CarModelListComponent,
    ProductListComponent,
    SubjectListComponent,
    CountryListComponent,
    SportsListComponent,
    VegetableListComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
