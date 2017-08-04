import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { LoginComponent }      from './login/login.component';
import { QuestionComponent }      from './dashboard/question/question.component';
import { CategoriesComponent }      from './dashboard/categories/categories.component';
import { HomePageComponent }      from './dashboard/home-page/home-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'question',
        component: QuestionComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
