# Checkout 51 Client

This project is a React frontend for the Checkout 51 offers app.
![image](https://github.com/user-attachments/assets/eba7aeca-3b63-4657-88a5-560d315745af)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.  
Unit tests for components (such as `OfferList`) are located in the `src/components` directory and use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## API Proxy

This client is configured to proxy API requests to the backend server.  
Make sure your backend is running on the same port as specified in the `proxy` field of `package.json` (default: `http://localhost:5000`).

## Project Structure

- `src/components/OfferList.js` – Displays and sorts the list of offers.
- `src/components/OfferCard.js` – Displays a single offer card.
- `src/services/api.js` – Fetches offers from the backend API.
- `src/components/OfferList.test.js` – Unit tests for the OfferList component.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
