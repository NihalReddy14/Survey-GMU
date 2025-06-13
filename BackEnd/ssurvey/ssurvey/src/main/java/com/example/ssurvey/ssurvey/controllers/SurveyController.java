//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
package com.example.ssurvey.controllers;

import com.example.ssurvey.entities.Survey;
import com.example.ssurvey.exceptions.ResourceNotFoundException;
import com.example.ssurvey.services.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/surveys")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    // Create a new survey
    @PostMapping
    public ResponseEntity<Survey> createSurvey(@Valid @RequestBody Survey survey) {
        Survey createdSurvey = surveyService.createSurvey(survey);
        URI location = URI.create(String.format("/api/surveys/%s", createdSurvey.getId()));
        return ResponseEntity.created(location).body(createdSurvey); // 201 Created
    }

    // Get all surveys
    @GetMapping
    public ResponseEntity<List<Survey>> getAllSurveys() {
        return ResponseEntity.ok(surveyService.getAllSurveys());
    }

    // Get a survey by ID
    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable Long id) {
        Survey survey = surveyService.getSurveyById(id);
        return ResponseEntity.ok(survey);
    }

    @PutMapping("/{id}")
public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @Valid @RequestBody Survey survey) {
    Survey updatedSurvey = surveyService.updateSurvey(id, survey);
    return ResponseEntity.ok(updatedSurvey);
}

    // Delete a survey
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable Long id) {
        surveyService.deleteSurvey(id);
        return ResponseEntity.noContent().build();
    }
}
