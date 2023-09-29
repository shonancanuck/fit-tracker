# fit-tracker

FitTracker is a workout app designed to help users track their fitness progress. It allows users to sign up, log in, store their daily workout statistics in a database, check their last workout, and track their progress on each exercise. This app was initially developed as a Minimum Viable Product (MVP) solo project for the Code Chrysalis Immersive program, and revisited after course completion.

## Features

- User Authentication: FitTracker provides a secure user authentication system that allows users to sign up and log in to their personal accounts.
- Workout Tracking: Users can record their daily workout statistics, including exercise details such as the type of exercise, sets, reps, and weight lifted.
- Database Storage: FitTracker utilizes a database to store user information, workout data, and progress records.
- Last Workout Display: Users can view their last recorded workout, providing them with a quick overview of their most recent fitness session.
- Exercise Progress Tracking: FitTracker enables users to track their progress on each exercise over time, helping them monitor improvements and set new fitness goals.

## Getting Started

To get started with FitTracker, follow the steps below:

1. Clone the FitTracker repository from GitHub:

   ```
   git clone https://github.com/shonancanuck/FitTracker.git
   ```

2. Start the Frontend

   - Navigate to the `frontend` directory.
   - Install the required dependencies:

     ```
     npm install
     ```

   - Run the frontend development server:

     ```
     npm start
     ```

   - The frontend will be accessible at `http://localhost:3000`.

3. Start the Backend

   - Navigate to the `backend` directory.
   - Install the required dependencies:

     ```
     npm install
     ```

   - Run the backend server:

     ```
     npm run dev
     ```

   - The backend will be accessible at `http://localhost:3001`.

4. Open your web browser and navigate to `http://localhost:3000` to access FitTracker.

## Usage

FitTracker provides a simple and intuitive user interface. Here's a brief guide on how to use the app's main features:

### Sign Up

- On the FitTracker Log in page, click on the "Sign Up" button.
- Fill in the required information, including your username and password.
- Click on the "Register" button to create your account.
- You will be redirected to the login page.

### Log In

- Make sure you are on the FitTracker Log in page.
- Enter your registered username and password.
- Click on the "Log In" button to access your account.

### Recording a Workout

- After logging in, you will be taken to the dashboard.
- Click on "Current" in the navbar, or "Record Today's Workout" on the dashboard.
- Select an exercise from the list and enter the exercise details, such as sets, reps, and weight lifted.
- Click on the "Submit" button to record your information, and it will be updated on the "Current workout" screen.

### Viewing Last Workout

- Click "Recent" on the navbar, or "My most recent workout" on the dashboard, and you can see your last recorded workout displayed.
- This provides a quick summary of your most recent fitness session.

### Tracking Exercise Progress

- FitTracker automatically tracks your progress on each exercise.
- Navigate to the "History" section in the app by clicking "History" on the navbar or "Check my progress" on the dashboard.
- Select an exercise from those listed.
- You will find a comprehensive overview of your progress on that exercise over time.
- Use this information to monitor improvements and set new fitness goals.

## Limitations

Please note the following limitations of FitTracker:

- FitTracker is a minimum viable product developed as a school project and may not have all the features or robustness of a production-ready application.
- FitTracker currently provides one basic full body workout of six compound exercises, but provisions have been made for the ability to add exercises and customise workout routines in the future.
- The app's frontend and backend must be started separately as outlined in the "Getting Started" section.
