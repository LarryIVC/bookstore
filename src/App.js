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
import Categories from './components/Categories';

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
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
