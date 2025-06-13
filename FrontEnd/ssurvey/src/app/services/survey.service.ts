//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/api/surveys';

  constructor(private http: HttpClient) { }

  // Fetch all surveys
  getSurveys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Update a survey
  updateSurvey(id: number, survey: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, survey);
  }

  // Delete a survey
  deleteSurvey(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
