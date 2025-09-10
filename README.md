# Flowcus Project

A comprehensive school management platform with features for attendance, grades, assignments, teacher-parent messaging, news/events, and school bus tracking.

## 🚀 Features

- **Attendance Management**: Students can mark their attendance; teachers can view records.
- **Grades & Assignments**: Teachers can post grades and assignments, which are viewable by students and parents.
- **Messaging (Chat)**: Real-time communication channel for teachers and parents.
- **News & Events**: A centralized feed for school announcements and events.
- **Bus Tracker**: Live tracking of school buses using the Google Maps API and Firebase Realtime Database.

## 🛠️ Technology Stack

- **Frontend**: React, Vite, React Router DOM
- **Backend**: Firebase (Auth, Firestore, Realtime Database, Cloud Functions)
- **Mapping**: Google Maps JavaScript API

## 📋 Setup & Installation

### 1. **Firebase Project Setup**

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Create a new project.
3.  Enable the following services:
    -   **Authentication**: Enable "Email/Password" sign-in method.
    -   **Firestore Database**: Create a database in production mode.
    -   **Realtime Database**: Create a database.
    -   **Cloud Functions**: Enable the functions service.
    -   **Cloud Messaging (FCM)**: Go to Project Settings -> Cloud Messaging.

### 2. **Get API Keys**

1.  **Firebase Config**: From your Firebase project's overview, click "Add app" (select the web icon `</>`). Copy the `firebaseConfig` object.
2.  **Google Maps API Key**: Get an API key from the [Google Cloud Console](https://console.cloud.google.com/). Make sure to enable the **"Maps JavaScript API"**.

### 3. **Local Setup**

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/your-username/flowcus-project.git](https://github.com/your-username/flowcus-project.git)
    cd flowcus-project
    ```
2.  **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    ```
    -   Open `src/firebase.js` and paste your `firebaseConfig` object.
    -   Open `src/widgets/BusTracker.jsx` and replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual Google Maps API key.
3.  **Backend Setup**:
    ```bash
    cd ../backend/functions
    npm install
    ```
    -   Make sure your Firebase project is initialized locally: `firebase init`. Select **Functions** and **Hosting**.
    -   Your project is now linked. You can test and deploy functions.

### 4. **Firebase Security Rules**

1.  From the project root (`/flowcus-project`), copy the contents of `firestore.rules` and `realtime.rules` and paste them into the respective "Rules" tabs in your Firebase Console.

### 5. **Deployment**

1.  **Deploy Functions**:
    ```bash
    cd backend/functions
    firebase deploy --only functions
    ```
2.  **Deploy Frontend (Hosting)**:
    ```bash
    cd ../../frontend
    npm run build
    firebase deploy --only hosting
    ```
    
## 📂 Project Structure

- `frontend/`: All React source code.
- `backend/functions/`: All Firebase Cloud Functions.
- `firebase.json`: Firebase hosting and function configuration.
- `firestore.rules`: Security rules for Firestore.
- `realtime.rules`: Security rules for Realtime Database.
