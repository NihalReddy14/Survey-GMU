//Author: Vishal Chandra Podishetty G01426953
//Author: Nihal Reddy Cheruku G01455466
package com.example.ssurvey.entities;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String streetAddress;
    private String city;
    private String state;
    private String zip;
    private String telephone;
    private String email;
    private LocalDate surveyDate;

    // Changed likedAspects to a List with @ElementCollection
    @ElementCollection
    @CollectionTable(name = "survey_liked_aspects", joinColumns = @JoinColumn(name = "survey_id"))
    @Column(name = "aspect")
    private List<String> likedAspects = new ArrayList<>();

    private String interestSource;
    private String likelihoodToRecommend;

    @Lob
    private String additionalComments;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getStreetAddress() { return streetAddress; }
    public void setStreetAddress(String streetAddress) { this.streetAddress = streetAddress; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }

    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public LocalDate getSurveyDate() { return surveyDate; }
    public void setSurveyDate(LocalDate surveyDate) { this.surveyDate = surveyDate; }

    public List<String> getLikedAspects() { return likedAspects; }
    public void setLikedAspects(List<String> likedAspects) { this.likedAspects = likedAspects; }

    public String getInterestSource() { return interestSource; }
    public void setInterestSource(String interestSource) { this.interestSource = interestSource; }

    public String getLikelihoodToRecommend() { return likelihoodToRecommend; }
    public void setLikelihoodToRecommend(String likelihoodToRecommend) { this.likelihoodToRecommend = likelihoodToRecommend; }

    public String getAdditionalComments() { return additionalComments; }
    public void setAdditionalComments(String additionalComments) { this.additionalComments = additionalComments; }
}
