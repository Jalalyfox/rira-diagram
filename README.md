# Company and Departments Diagram

This project is a React application built using TypeScript and Redux that visualizes a company's structure with its departments. The diagram displays the company and its departments as draggable cards connected by lines, allowing for easy manipulation and visualization of the company's organizational structure.

## Features

- **Draggable Cards:** Each department and the company are displayed as draggable cards. You can move them around the screen.
- **Dynamic Lines:** Lines connect the company to its departments, visually representing the relationship between them.
- **Add Departments:** Users can add new departments using a simple form.
- **Persistent State:** The application uses Redux for state management, and departments data is fetched from a mock API.
- **TypeScript:** The project is developed with TypeScript to ensure type safety and enhance development experience.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To get started with the project, follow the instructions below.

### Prerequisites

Ensure you have Node.js and npm installed on your development machine.

### Installation

1. Clone the repository:
```git clone github.com/Jalalyfox/rira-diagram```

2. Navigate to the project directory:
```cd rira-diagram```

3. Install the dependencies:
```npm install```
### Running the Application

To run the application in development mode, use the following command:
```npm start```


This will start the app on [http://localhost:3000](http://localhost:3000). The page will reload if you make edits, and you will see any lint errors in the console.

### Building for Production

To build the app for production, run:

```npm run build```


This will create a `build` folder containing the optimized and minified version of the app, ready for deployment.


This will launch the test runner in interactive watch mode.

## Project Structure

- **`src/components`:** Contains reusable components like cards, lines, and forms for adding departments.
- **`src/features`:** Contains Redux slices for managing company and department states.
- **`src/pages`:** Includes the main pages of the application, such as the diagram page.
- **`src/services`:** API service layer for interacting with mock backend endpoints.
- **`src/store`:** Redux store configuration.
- **`src/hooks`:** Custom hooks for typed selector and dispatch in Redux.
