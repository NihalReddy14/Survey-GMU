//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and other directives
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SurveyService } from '../services/survey.service'; // Import SurveyService

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include FormsModule for [(ngModel)]
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: any[] = []; // Surveys array to hold data from the backend
  selectedSurvey: any = null; // For editing
  isEditModalOpen: boolean = false; // To toggle the edit modal

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.fetchSurveys(); // Fetch surveys on component initialization
  }

  fetchSurveys(): void {
    this.surveyService.getSurveys().subscribe(
      (data) => {
        this.surveys = data; // Assign fetched data to surveys array
      },
      (error) => {
        console.error('Error fetching surveys:', error); // Handle errors
      }
    );
  }

  onEdit(survey: any): void {
    this.selectedSurvey = { ...survey }; // Clone the survey for editing
    this.isEditModalOpen = true; // Show edit modal
  }

  saveChanges(): void {
    console.log('Saving survey:', this.selectedSurvey); // Log the survey data being saved
    if (this.selectedSurvey) {
      this.surveyService.updateSurvey(this.selectedSurvey.id, this.selectedSurvey).subscribe(
        (updatedSurvey) => {
          console.log('Survey updated successfully:', updatedSurvey); // Log the response from the backend
          this.closeEditModal(); // Close the edit modal
          this.fetchSurveys(); // Refresh the survey list
        },
        (error) => console.error('Error updating survey:', error) // Log errors if the request fails
      );
    }
  }


  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedSurvey = null;
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe(
        () => {
          console.log(`Survey with ID ${id} deleted.`);
          this.fetchSurveys(); // Refresh the list after deletion
        },
        (error) => console.error('Error deleting survey:', error)
      );
    }
  }
}
