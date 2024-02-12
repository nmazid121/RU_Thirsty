# RUThirsty

## 📸 Video / Demo of the Project:

Can be used at : https://ruthirsty.xyz/
https://github.com/nmazid121/RU_Thirsty/assets/129209117/04a1fb7a-cfdf-4fe5-88e3-df214510407a

## 🎋 Intro

"RUThirsty" is a full-stack web application designed to help Rutgers University students in New Brunswick locate water fountains across campus. Utilizing Google Maps for real-time display, it offers an intuitive and user-friendly interface for finding the nearest water fountain. RUThirsty enhances campus life by making hydration convenient and accessible for all students.

## 📦 Tech Stack

- MongoDB
- Express
- React
- Node
- JavaScript
- HTML/CSS
- Google Maps API
- Python

## 👩🏽‍🍳 Features:
Describe what your project can do, like what the user can do. Include all features, every little detail matters.

In case you are thirsty on Rutgers University, you can open the website and :
1) Choose the campus you are currently on
2) Either choose your current location (which will prompt you to allow your location)
   OR navigate through the embedded Google Map to find a fountain in your area
3) Click on a water fountain marker to view / add a marker
   Viewing : The name of the marker and its location description will show
   Adding : Type in the location of the marker and include a description of how to find it
4) Click ok to accept or leave the marker tab
5) Find a water fountain and drink some water! 😀

## 💭 Process:
- To begin this project, some of my friends and I began to think of a problem that we may encounter at Rutgers, somehow we were always thirsty and looking for a water fountain. Inspired by "Poop Map", an app that shows nearby bathrooms in your area, we decided to create a web app that could show nearby water fountains at Rutgers for students like us who were looking for them. 

  - First we thought of the design of how the app would work and thought of creating buttons for each campus, allowing the user to also pin point their location or find a fountain on that campus. Then we thought of the tech stack we would use and how it would be easy for the user to use the site. After some research we decided on the MERN stack, which uses React for the frontend, Express and Node for the backend and MongoDB as a databate to store the marker data.Developing the frontend was an enjoyable and rewarding process, but integrating the backend, particularly with MongoDB and Express, to manage data retrieval and transmission proved to be the project's most challenging aspect. After extensive testing and debugging, we successfully integrated the backend with the frontend, culminating in the launch of our fully functional web app, RUThirsty.

## 📚 Learnings:
Here are some important concepts I learned during this project...
- **React Router and Routes:**
What I learned: How to use React Router for navigating between different components or pages in a React application. The Routes and Route components are used to define the path and the component that should be rendered when the path matches the URL.

- **useState and use EffectHook:** useState hook is a fundamental React hook for state management within functional components. It allows you to add React state to function components, enabling them to hold and set state over time.The useEffect hook lets you perform side effects in function components. It's used for data fetching, setting up a subscription, and other operations that need to happen when the component mounts or updates.

- **Environment Variables:** Securely use environment variables in a React application for storing sensitive information like API keys (Google Maps and MongoDB URI). This approach helps keep my API keys and other sensitive information safe from being compromised.

- **External API Integration with Axios:**
How to make HTTP requests to external APIs using Axios, a promise-based HTTP client for the browser and Node.js. This is crucial for interacting with back-end services or third-party APIs.

- **Google Maps API Integration:** Integrating Google Maps into a React application using the @react-google-maps/api library. This involves displaying maps, adding markers, and handling user interactions with the map.

- **Event Handling in React:** handling events such as clicking 'Ok' to update a marker or the 'X' to close the window without updating the marker. This is also in conjunction with API requests with axios to interact with backend and database.

- **Express Framework:** How to use Express, a minimal and flexible Node.js web application framework, to create the serverside app. Express simplifies the server creation process, handling requests and responses with ease.

- **Mongoose for MongoDB Integration:**
What I learned: The use of Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution for storing marker data including, longitude, lattitude, name and description into an object. 

- **MongoDB Connection and Error Handling:** How to connect to MongoDB using Mongoose and handle connection errors or success events by outputting a success or fail message in the console. This is essential for ensuring that the application can interact with the database before starting the server.

## ✨ Improvement:
- UI/UX Design can be much nicer although the site is fairly simple to use
- Allowing the user to delete the markers that they added, which would require user sign in
- Allowing the user to upload a picture of the exact location of where the fountain is

## 🚦 Running the Project:
If you choose to clone this project, here's how you can run it : 

1) Install Node, Install @react-google-maps/api, install express, and any other additional node packages and modules.
2) Go to the file path 'ruthirsty-app\RU_Thirsty\ruthirsty>' and run 'npm start' in the console
3) Go to the file path 'ruthirsty-app\RU_Thirsty\ruthirsty\server>' and run 'node server.js' in the console
4) Enjoy !

