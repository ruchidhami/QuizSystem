import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { HeaderPageComponent } from './dashboard/header-page/header-page.component';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    QuestionComponent,
    HeaderPageComponent,
    HomePageComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
