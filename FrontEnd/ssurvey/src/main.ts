//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app/app.component';
import { SurveyFormComponent } from './app/survey-form/survey-form.component';
import { SurveyListComponent } from './app/survey-list/survey-list.component';

const routes: Routes = [
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent },
  { path: '', redirectTo: 'survey-form', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule, HttpClientModule) 
  ]
});
