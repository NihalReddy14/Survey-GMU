//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
import { provideRouter, RouterConfig } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

export const routes: RouterConfig = [
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent },
  { path: '', redirectTo: '/survey-form', pathMatch: 'full' } //Default view is set to Survey - form
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];
