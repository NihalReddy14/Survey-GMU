//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf directives
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)] and template-driven forms
import { HttpClient } from '@angular/common/http'; // Required for HTTP requests

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  // Survey model object
  survey: any = {
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    telephone: '',
    email: '',
    surveyDate: '',
    likedAspects: [],
    interestSource: '',
    likelihoodToRecommend: '',
    additionalComments: ''
  };

  // Dropdown and checkbox options
  likedAspectsOptions = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm Rooms', 'Sports'];
  interestSourceOptions = ['Friends', 'Television', 'Internet', 'Other'];
  likelihoodOptions = ['Very Likely', 'Likely', 'Unlikely'];

  // Backend API endpoint
  private apiUrl = 'http://localhost:8080/api/surveys';

  // Inject HttpClient for making HTTP requests
  constructor(private http: HttpClient) { }

  // Handle checkbox changes
  onCheckboxChange(event: any) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      this.survey.likedAspects.push(value);
    } else {
      const index = this.survey.likedAspects.indexOf(value);
      if (index > -1) {
        this.survey.likedAspects.splice(index, 1);
      }
    }
  }

  // Handle form submission
  onSubmit() {
    console.log('Submitting Survey:', this.survey);

    // Make a POST request to the backend API
    this.http.post(this.apiUrl, this.survey).subscribe(
      (response) => {
        console.log('Survey saved successfully:', response);
        alert('Survey submitted successfully!'); // Notify the user
        this.resetForm(); // Reset the form after submission
      },
      (error) => {
        console.error('Error saving survey:', error);
        alert('Failed to submit survey. Please try again.'); // Notify the user of an error
      }
    );
  }

  // Handle form reset
  onCancel() {
    console.log('Survey Cancelled');
    this.resetForm();
  }

  // Reset the survey object
  private resetForm() {
    this.survey = {
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      telephone: '',
      email: '',
      surveyDate: '',
      likedAspects: [],
      interestSource: '',
      likelihoodToRecommend: '',
      additionalComments: ''
    };
  }
}
