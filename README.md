# Weather Dashboard

A weather dashboard application that displays current weather and a 5-day forecast for any city. Users can search for cities, add them to a list of favorites, and remove them from the favorites list.

---

## Features

- **Search**: Find any city's current weather and 5-day forecast.
- **Favorites**: Add and remove cities from a personalized favorites list.
- **Unit Toggle**: Switch between Celsius and Fahrenheit for temperature display.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server)

---

## Getting Started

1. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install

2. **Set Up JSON Server**:
   ```bash
   npm install -g json-server
   npm install -g nodemon

3. **Run JSON Server**:
   ```bash
   nodemon --watch db.json --exec "json-server --watch db.json --port 5000"

4. **Start the Application**:
   ```bash
   npm start
