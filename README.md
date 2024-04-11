# News Web Application

This is a news web application built using [Firebase](https://firebase.google.com/) for authentication, Firestore for database storage, and offline support for enhanced user experience.

## Features

### Authentication

The app uses Firebase Authentication to manage user sign-up, sign-in, and authentication processes. Users can create accounts, sign in securely, and access personalized features.

### News Display

The app retrieves news articles from the [News API](https://newsapi.org/) and displays them in an organized manner, allowing users to view the latest news based on various categories or search criteria.

### Firestore Integration

Firestore is utilized as the database to store news articles fetched from the News API. It enables real-time data synchronization and seamless offline support.

### Offline Support

With Firebase's offline persistence feature, users can access previously fetched news articles even when they are offline. This feature enhances user experience by ensuring continuous access to previously viewed content.

### Favourites 

With redux state management, user is able to add favourites and remove it

## Setup

1. **Firebase Configuration**

   - Set up a Firebase project and configure authentication settings.
   - Obtain Firebase configuration credentials and update them in the project.

2. **Install Dependencies**

   - Run `npm install` to install all necessary dependencies required for the project.

3. **Environment Variables**

   - Set environment variables for API keys, such as the News API key.

## Technologies Used

- Next.js: Frontend framework for building the user interface.
- Firebase: Backend services for authentication, database, and offline support.
- News API: External API used to fetch news articles.
- Redux: State Management purpose

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure Firebase credentials.
4. Run the application using `npm run dev`.

## Sample Images

1. Home Page 
![Screenshot 2023-12-27 080909](https://github.com/dhruv8433/news-app/assets/114583978/4bfe47d6-edf1-4f46-8473-4ecdc20bbcdd)

2. Sign up or Login
![image](https://github.com/dhruv8433/news-app/assets/114583978/9936f1f5-9c9b-4011-a1f8-a4888fcdbfe3)

3. Detailed Page
![image](https://github.com/dhruv8433/news-app/assets/114583978/bf9feeff-4428-4993-b573-9fbd5d9ea29b)

4. Profile page
![image](https://github.com/dhruv8433/news-app/assets/114583978/7f8932dc-1427-4c58-b301-bcd6d224c24e)
