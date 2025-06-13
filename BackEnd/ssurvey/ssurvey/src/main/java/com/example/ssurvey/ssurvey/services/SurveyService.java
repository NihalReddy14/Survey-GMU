//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
package com.example.ssurvey.services;

import com.example.ssurvey.entities.Survey;
import com.example.ssurvey.exceptions.ResourceNotFoundException;
import com.example.ssurvey.repositories.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    @Transactional
    public Survey createSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    public Survey getSurveyById(Long id) {
        return surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey not found with ID: " + id));
    }

    @Transactional
    public Survey updateSurvey(Long id, Survey updatedSurvey) {
        Survey existingSurvey = surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey not found with ID: " + id));

        existingSurvey.setFirstName(updatedSurvey.getFirstName());
        existingSurvey.setLastName(updatedSurvey.getLastName());
        existingSurvey.setStreetAddress(updatedSurvey.getStreetAddress());
        existingSurvey.setCity(updatedSurvey.getCity());
        existingSurvey.setState(updatedSurvey.getState());
        existingSurvey.setZip(updatedSurvey.getZip());
        existingSurvey.setTelephone(updatedSurvey.getTelephone());
        existingSurvey.setEmail(updatedSurvey.getEmail());
        existingSurvey.setSurveyDate(updatedSurvey.getSurveyDate());
        existingSurvey.setLikedAspects(updatedSurvey.getLikedAspects());
        existingSurvey.setInterestSource(updatedSurvey.getInterestSource());
        existingSurvey.setLikelihoodToRecommend(updatedSurvey.getLikelihoodToRecommend());
        existingSurvey.setAdditionalComments(updatedSurvey.getAdditionalComments());

        return surveyRepository.save(existingSurvey);
    }

    @Transactional
    public void deleteSurvey(Long id) {
        if (!surveyRepository.existsById(id)) {
            throw new ResourceNotFoundException("Survey not found with ID: " + id);
        }
        surveyRepository.deleteById(id);
    }
}
