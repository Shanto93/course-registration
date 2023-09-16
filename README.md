# Course-Registration

This is a course selection application built with React. It allows users to browse a list of available courses, add them to a shopping cart, and keep track of their total credit hours and the total price of selected courses.

## Table of Contents

- [Features](#features)
- [State Management](#state-management)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

### 1. Course Selection

- Users can view a list of available courses with details such as course name, description, credit hours, and price.
- Courses can be selected and added to the shopping cart.

### 2. Credit Hour Tracking

- The application keeps track of the total credit hours selected by the user.
- Users are alerted if they exceed the maximum allowed credit hours.

### 3. Price Calculation

- The app calculates the total price of selected courses and displays it in the shopping cart.
- Users can see the total price of their selected courses.

## State Management

State management in this assignment project is handled primarily through React's built-in `useState` and `useEffect` hooks.

- The following state variables are used:
  - `courses`: Stores the list of available courses fetched from a JSON file.
  - `selectedCourse`: Stores the selected courses in the shopping cart.
  - `totalCredit`: Keeps track of the total credit hours of selected courses.
  - `remainingCredit`: Calculates the remaining credit hours allowed (maximum 20).
  - `prices`: Stores the total price of selected courses.

- State updates are performed when users select courses. When a course is selected:
  - It checks if the course is already in the shopping cart to prevent duplicates.
  - Calculates the new total credit hours and remaining credit hours.
  - Updates the total price.
  - Adds the course to the `selectedCourse` array.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/course-selection-app.git
2. Change to the project directory:
   ```bash
   cd course-selection-app
3. Install the required dependencies:
   ```bash
   npm install
   
## Usage

1. Start the development server:
   ```bash
   npm start
2. Open your web browser and go to (https://course-registration-by-shanto.netlify.app/) to use the application.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request with a clear description of your changes.
