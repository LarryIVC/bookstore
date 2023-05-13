import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ListBooks from './components/ListBooks';
import AddNewBook from './components/AddNewBook';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route
          index
          element={(
            <>
              <ListBooks />
              <AddNewBook />
            </>
        )}
        />
        <Route path="categories" element={<div>Coming soon... categories</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
