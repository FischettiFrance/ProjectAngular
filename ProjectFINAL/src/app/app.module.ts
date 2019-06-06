import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MappaComponent } from './mappa/mappa.component';
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  {path: '', component: RegisterComponent },
  {path : 'login', component: LoginComponent  },
  {path : 'mappa', component : MappaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    MappaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U'
    })
    ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
