# Digital Readiness Assessment App

A web-based Digital Readiness Assessment tool built using **React** that evaluates how digitally prepared a business is.  
The application collects user details, performs a multi-step assessment, calculates a readiness score, and generates a downloadable PDF report.

---

## Features

- Multi-step assessment flow
- Email OTP verification using **EmailJS**
- Structured question & answer model
- Maturity-based scoring system
- Visual score progress bar
- Downloadable **PDF report**
- Retake assessment option
- Local storage persistence for reports
- Clean UI with plain CSS

---

## Assessment Flow

1. **Landing Page**
2. **Personal Details**
    - Name & Email
    - Email verification using OTP
3. **Business Details**
    - Few detail about the business
4. **Assessment Sections**
    - Strategy
    - Operations
    - Workspace
    - Customers
5. **Result Page**
    - Overall readiness score
    - Progress bar
    - PDF report download
    - Retake assessment option

---

## Email OTP Verification

- OTP is generated on the client
- Sent via **EmailJS**
- User must verify OTP before proceeding
- EmailJS credentials are stored securely using environment variables

> Note:  
> For production systems, OTP verification should be handled by a backend service.  
> EmailJS is used here for frontend-only implementation

---

## Scoring Logic

- **Maturity-based questions**
    - No plans → 0
    - Being planned → 1
    - Being implemented → 2
    - Already in use → 3
- **Checkbox questions**
    - Score based on number of selected options vs maximum
    - Final score is calculated as:
    - (Obtained Score / Maximum Possible Score) × 100

---

## PDF Report

- Generated using **jsPDF**
- Contains:
  - Overall readiness score
  - Section-wise answers
- Automatically downloaded on click

---

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS
- **Email Service:** EmailJS
- **PDF Generation:** jsPDF
- **State Management:** React Hooks
- **Storage:** localStorage

---

## Environment Variables

EmailJS keys are stored securely in a `.env` file.
