import "./App.css";
import { useState, useEffect } from "react";
import Search from "./pages/search";
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as booksAPI from './BooksAPI'
function App() {
  const [category, setCategory] = useState('')
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const getbooks = async () => {
      const res = await booksAPI.getAll();
      setbooks(res);
    };

    getbooks();
  }, []);

  const handleCategory = (book, e) => {
    setCategory(e)
    booksAPI.update(book, e)
    booksAPI.getAll()
      .then((books) => {
        setbooks(books);
      })
  }

  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Home books={books} handleCategory={handleCategory} />} />
          <Route exact path="/search" element={<Search handleCategory={handleCategory} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
