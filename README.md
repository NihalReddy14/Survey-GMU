 Student Survey Fullstack App

A fullstack web application for submitting and managing student surveys. This Project was done by both me and my friend. Built using:

 Angular (Frontend)
 Spring Boot (Backend)
 RESTful API
 Supports macOS & Windows environments

---

Project Structure
Group_Project_Assignment_3/
├── BackEnd/ssurvey # Spring Boot backend
├── FrontEnd/ssurvey # Angular frontend


 Setup on macOS

 1. Install Dependencies

```bash
brew install nvm
nvm install --lts
npm install -g @angular/cli
brew install openjdk maven git

 2.Run Backend

cd BackEnd/ssurvey
mvn spring-boot:run

3. Run Frontend

cd FrontEnd/ssurvey
npm install
ng serve


Setup on Windows

1. Install Dependencies

Download and install:
Node.js (LTS)
Angular CLI using npm install -g @angular/cli
Java JDK 17+
Maven
Git (optional)
Ensure java, javac, and mvn are added to PATH.

2.Run Backend

cd BackEnd\ssurvey
mvn spring-boot:run

3. Run Frontend

cd FrontEnd\ssurvey
npm install
ng serve

Project URLs

Frontend: http://localhost:4200
Backend API: http://localhost:8080/api/surveys

