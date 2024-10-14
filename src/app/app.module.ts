
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StudentListComponent} from './components/student-list/student-list.component';


const routes: Routes = [
  {path: 'displayhelloworld', component: StudentListComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'displayname', component: DisplaynameComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'simpleform', component: SimpleformComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting', component: UsergreetingComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'textlength', component: TextlengthComponent},
  {path: 'currencyconverter', component: CurrencyconverterComponent},
  {path: 'evenoddchecker', component: EvenoddcheckerComponent},
  {path: 'wordreverser', component: WordreverserComponent},
  {path: 'showdate', component: ShowdateComponent},
  {path: 'showusername', component: ShowusernameComponent},
  {path: 'multiplicationtable', component: MultiplicationtableComponent},
  {path: 'simplelogin', component: SimpleloginComponent},
  {path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  {path: 'bookmarklist', component: BookmarklistComponent},
  {path: 'charactercounter', component: CharactercounterComponent},
  {path: 'palindromechecker', component: PalindromecheckerComponent},
  {path: 'temperatureconverter', component: TemperatureconverterComponent},
  {path: 'shoppinglist', component: ShoppinglistComponent},
  {path: 'factorialcalculator', component: FactorialcalculatorComponent},
  {path: 'todomanager', component: TodomanagerComponent},
  {path: 'guessnumbergame', component:GuessnumbergameComponent},
  {path: 'wordcounter', component:WordcounterComponent},
  {path: 'randomnumbergenerator', component:RandomnumbergeneratorComponent},
  {path: 'multiplicationchecker', component:MultiplicationcheckerComponent},
  {path: 'uppercaseconverter', component:UppercaseconverterComponent},
  {path: 'wordshuffler', component:WordshufflerComponent},
  {path: 'bmisolver', component:BmisolverComponent},
  {path: 'usernamevalidator', component:UsernamevalidatorComponent},
  {path: 'interestcalculator', component:InterestcalculatorComponent},
  {path: 'compoundinterestcalculator', component:CompoundinterestcalculatorComponent},
  {path: 'fibonaccigenerator', component:FibonaccigeneratorComponent},
  {path: 'oddsumcalculator', component:OddsumcalculatorComponent},
  {path: 'currencyformatter', component:CurrencyformatterComponent},
  {path: 'randomquotedisplay', component:RandomquotedisplayComponent},
  {path: 'uppercasegreeting', component:UppercasegreetingComponent},
  {path: 'divisiblechecker', component:DivisiblecheckerComponent},
  {path: 'dailyjournal', component:DailyjournalComponent},
  {path: 'simpleregister', component:SimpleregisterComponent},
  {path: 'simpleflashlight', component:SimpleflashlightComponent},
  {path: 'appealform', component:AppealformComponent},
  {path: 'guesscolor', component:GuesscolorComponent},
  {path: 'divisionchecker', component:DivisioncheckerComponent},
  {path: 'divisiontable', component:DivisiontableComponent},
  {path: 'checkmbps', component:CheckmbpsComponent},
  {path: 'pingchecker', component:PingcheckerComponent},
  {path: 'creatingbracket', component:CreatingbracketComponent},




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
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyconverterComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    DailyjournalComponent,
    SimpleregisterComponent,
    AppealformComponent,
    GuesscolorComponent,
    DivisioncheckerComponent,
    DivisiontableComponent,
    CheckmbpsComponent,
    PingcheckerComponent,
    CreatingbracketComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
