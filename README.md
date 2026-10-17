# AI-Powered Resume Analyzer & JD Matcher

An AI-powered web application that analyzes resumes against job descriptions using Google's Gemini API.

The application identifies matching skills, missing skills, candidate strengths, and generates personalized resume improvement suggestions.

## Features

- PDF Resume Upload
- Job Description Analysis
- AI-Based Skill Matching
- Resume Match Score
- Missing Skills Identification
- Personalized Resume Suggestions
- AI-Generated Interview Questions
- Responsive Web Dashboard

## Tech Stack

**Backend:** Python, Flask

**Frontend:** HTML, CSS, JavaScript

**AI Integration:** Google Gemini API

**PDF Processing:** PyMuPDF

**API Response:** JSON

## How It Works

1. User uploads a PDF resume.
2. User enters a job description.
3. Flask extracts text from the PDF using PyMuPDF.
4. Extracted text and job description are sent to Gemini.
5. Gemini analyzes relevant skills and experience.
6. Results are returned as structured JSON.
7. The frontend displays the analysis.

## Project Architecture

```text
User
 |
 v
HTML/CSS/JavaScript Frontend
 |
 v
Flask REST API
 |
 v
PDF Text Extraction
 |
 v
Google Gemini API
 |
 v
Structured JSON Response
 |
 v
Resume Analysis Dashboard
```

## Installation

Clone the repository:

```bash
git clone https://github.com/priyanshu-saini1/AI-Resume-Analyzer.git
```

Navigate to the project:

```bash
cd AI-Resume-Analyzer
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Run the application:

```bash
python app.py
```

Open:

http://127.0.0.1:5000

## Use Cases

- Resume and Job Description Comparison
- Skill Gap Identification
- Resume Improvement Suggestions
- Technical Interview Preparation
- Career Development Assistance

## Disclaimer

The AI-generated match score is an approximate skills-alignment indicator, not a prediction of hiring success.

## Author

Priyanshu Saini

B.Tech Computer Science (AI & ML)

JECRC University, Jaipur