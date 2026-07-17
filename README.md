# Smart City Complaint Management System using AWS

<div align="center">

### Cloud-Based Complaint Management System for Smart Cities

A Smart City initiative that enables citizens to register public infrastructure complaints and helps municipal authorities efficiently manage and monitor complaints using AWS Cloud Services.

</div>

---

## Project Overview

The Smart City Complaint Management System is a cloud-based web application designed to simplify complaint registration and management for public infrastructure issues. Citizens can report problems such as potholes, garbage collection issues, traffic problems, and street light failures.

The system uses AWS Cloud Services to securely store complaint information, automate complaint processing, and provide efficient complaint management capabilities.

This project aims to improve transparency, reduce manual efforts, and enable faster complaint resolution for municipal authorities.

---

## Problem Statement

Traditional complaint management systems often suffer from:

- Delayed complaint resolution.
- Lack of transparency.
- Manual complaint management.
- Inefficient communication between citizens and authorities.
- Difficulty in maintaining centralized complaint records.

This project addresses these challenges by providing a centralized cloud-based complaint management platform.

---

## Objectives

- Simplify complaint registration.
- Maintain complaint records securely.
- Provide real-time complaint management.
- Improve transparency in complaint tracking.
- Utilize AWS cloud services for scalability and reliability.
- Build an efficient complaint management system for smart cities.

---

## Features

- Citizen Login System
- Complaint Registration
- View All Complaints
- Complaint Details Management
- Cloud-Based Database Management
- REST API Integration
- Complaint Status Tracking
- Secure Database Connectivity
- AWS Cloud Integration
- CloudWatch Monitoring and Logging

---

## Complaint Categories

The system supports:

- Pothole Complaints
- Garbage Collection Issues
- Traffic Problems
- Street Light Failure
- Road Damage Complaints
- Public Infrastructure Complaints

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- AWS Lambda
- REST APIs

### Database

- Amazon RDS (MySQL)
- PyMySQL Library

### AWS Services

- AWS Lambda
- Amazon API Gateway
- Amazon RDS
- Amazon EventBridge
- Amazon CloudWatch
- AWS IAM

---

## AWS Services Used

| AWS Service | Purpose |
|------------|---------|
| AWS Lambda | Processes complaint-related requests |
| Amazon API Gateway | Connects the frontend with Lambda functions |
| Amazon RDS | Stores complaint records securely |
| Amazon EventBridge | Performs scheduled complaint-processing tasks |
| Amazon CloudWatch | Monitors logs and application activities |
| AWS IAM | Manages secure permissions between AWS services |
| PyMySQL Layer | Enables Lambda to communicate with Amazon RDS |

---

## Project Workflow

```text

Citizen
   |
   v
Login
   |
   v
Register Complaint
   |
   v
Frontend Website
(HTML + CSS + JavaScript)
   |
   v
Amazon API Gateway
   |
   v
AWS Lambda Function
   |
   v
PyMySQL Layer
   |
   v
Amazon RDS (MySQL)
   |
   v
Store Complaint Information
   |
   v
Amazon EventBridge
   |
   v
Scheduled Complaint Processing
   |
   v
AWS Lambda Function
   |
   v
Update Complaint Status
   |
   v
Complaint Dashboard
   |
   v
Municipal Authorities


```

---

## System Architecture

```text

                 Citizen
                    |
                    |
                    v
                   Login
                    |
                    |
                    v
             Register Complaint
                    |
                    |
                    v
                  Website
             (HTML, CSS, JS)
                    |
                    |
                    v
              Amazon API Gateway
                    |
                    |
                    v
                AWS Lambda
                    |
                    |
                    v
               PyMySQL Layer
                    |
                    |
                    v
             Amazon RDS (MySQL)
                    |
                    |
                    v
              Store Complaint Data
                    |
                    |
                    v
               Amazon EventBridge
                    |
                    |
                    v
                AWS Lambda
                    |
                    |
                    v
             Complaint Processing
                    |
                    |
                    v
                  Dashboard
                    |
                    |
                    v
            Municipal Authorities

```

---

## Database Information

The database stores:

- Complaint ID
- Citizen Name
- Complaint Category
- Location
- Complaint Description
- Complaint Image URL
- Complaint Status
- Date and Time

### Complaint Status

```text

Pending
   |
   v
In Progress
   |
   v
Solved

or

Rejected

```

---

## Project Screenshots

### Home Page

The home page provides users with an overview of the complaint management system.

![Home Page](./screenshots/home%20page.png)

---

### Login Page

Users can securely log in to access the Smart City Complaint Management System.

![Login Page](./screenshots/login%20page.png)

---

### Add Complaint Page

Citizens can register complaints by providing the necessary complaint details.

![Add Complaint](./screenshots/Add%20complaints.png)

---

### All Complaints

Users can view all registered complaints along with their current statuses.

![All Complaints](./screenshots/All%20complaints.png)

---

### Complaint Details

This page displays detailed information about individual complaints.

![Complaint Details](./screenshots/Complaints%20details.png)

---

## Folder Structure

```text

Smart-City-Complaint-System
│
├── backend
│      └── addComplaint
│
├── frontend
│
├── images
│
├── pymysql-layer
│
├── screenshots
│      ├── login page.png
│      ├── home page.png
│      ├── All complaints.png
│      ├── Complaints details.png
│      └── Add complaints.png
│
├── README.md
│
└── requirements.txt

```

---

## Installation Guide

### Clone the Repository

```bash
git clone https://github.com/tanishapatil7888/Smart-City-Complaint-System.git
```

### Navigate to the Project Directory

```bash
cd Smart-City-Complaint-System
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Deploy the Project

Configure and deploy the required AWS services:

- AWS Lambda
- Amazon API Gateway
- Amazon RDS
- Amazon EventBridge
- Amazon CloudWatch
- IAM Roles and Permissions

---

## Future Enhancements

The following improvements can be implemented in future versions:

- Mobile Application Support
- Email Notifications
- SMS Notifications
- Complaint Analytics Dashboard
- Multi-Language Support
- Municipality Notification System
- GIS-Based Complaint Tracking

---

## Applications

This project can be used by:

- Municipal Corporations
- Smart City Initiatives
- Government Organizations
- Educational Demonstrations
- Cloud Computing Projects
- Academic Projects

---

## Why This Project?

This project helps in:

- Improving transparency in complaint management.
- Reducing manual efforts.
- Maintaining centralized complaint records.
- Enabling efficient complaint monitoring.
- Supporting cloud-based smart city initiatives.
- Providing scalable complaint management solutions.

---

## Author

### Tanisha Patil

- B.Tech in Computer Engineering
- R. C. Patel Institute of Technology, Shirpur
- AWS Cloud Computing Enthusiast
- Full Stack Developer
- UI/UX Design Enthusiast

---

## License

This project is developed for:

- Educational Purposes
- Academic Demonstrations
- Cloud Computing Projects
- Portfolio Showcase

---

## Acknowledgements

Special thanks to AWS Cloud Services for providing scalable cloud infrastructure used in this project.

---

> ### Smart City Complaint Management System
>
> #### Developed using AWS Cloud Services for building smarter and more connected communities.
