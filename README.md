# Expense Tracker App

Expense Tracker is a simple web application that helps you manage your expenses and income. It allows you to keep track of your financial transactions and provides insights into your spending habits.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Record and categorize your expenses and income.
- View your financial transactions in a user-friendly interface.
- Generate reports and summaries of your spending.
- Dark mode and light mode themes for comfortable usage.
- Secure user authentication and data storage.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: You must have Node.js installed to run the application.
- Git: You should have Git installed to clone the repository.
- Python: The backend of the application uses Python and Flask.

### Clone the Repository

Clone this repository to your local machine using the following command:

git clone https://github.com/KilonzoJames/Expense-Tracker.git


### Install Frontend Dependencies
Navigate to the frontend directory and install the necessary dependencies:
- cd Expense-Tracker/frontend
- npm install

### Install Backend Dependencies
Navigate to the backend directory and create a virtual environment using Pipenv. Install the necessary dependencies:
- cd Expense-Tracker/backend
- pipenv install

### Environment Configuration
Create a .env file in the backend directory of the project and configure the following environment variables:
- DATABASE_URL=''
- SECRET_KEY=''

### Database Setup
Set up your database and apply migrations:
- cd Expense-Tracker/backend
- pipenv shell  # Activate the virtual environment
- flask db upgrade

### Start the Application
Start the application with the following command:
- cd Expense-Tracker/frontend
- npm run dev
- The application will be available at http://localhost:5173.

### Usage
1. Create an account or log in.
2. Add your expenses and income.
3. View your financial transactions and reports.
4. Customize your theme (dark/light mode) from the settings.

### API Documentation
-Expense Tracker provides an API for managing transactions. You can find the API documentation here.

### Contributing
- Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

### Fork the repository.
Create a new branch for your feature or bug fix.
- Make your changes and ensure the code is well-documented.
- Test your changes thoroughly.
- Submit a pull request with a clear description of your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

This updated README includes instructions for installing Pipenv, creating a virtual environment, and configuring environment variables. 