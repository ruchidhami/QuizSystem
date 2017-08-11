import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './admin-dashboard/dashboard.component';
import { UserDashboardComponent }      from './user-dashboard/user-dashboard.component';
import { LoginComponent }      from './login/login.component';
import { QuestionComponent }      from './admin-dashboard/question/question.component';
import { CategoriesComponent }      from './admin-dashboard/categories/categories.component';
import { HomePageComponent }      from './admin-dashboard/home-page/home-page.component';
import { NewQuizComponent }      from './user-dashboard/new-quiz/new-quiz.component';
import { UserHomeComponent }      from './user-dashboard/user-home/user-home.component';
import { UCategoriesComponent }      from './user-dashboard/u-categories/u-categories.component';

import { SecurityService }      from './security/security.service';

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
    path: 'admin',
    component: DashboardComponent,
    canActivate: [SecurityService],
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
        path: 'questions',
        component: QuestionComponent
      }
    ]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [SecurityService],
    children: [
      {
        path: 'home',
        component: UserHomeComponent
      },
      {
        path: 'categories',
        component: UCategoriesComponent
      },
      {
        path: 'newquiz/:id',
        component: NewQuizComponent
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: true });
