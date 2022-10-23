import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from '../BooksAPI'

const Search = ({ handleCategory }) => {
  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState("")

  const updateQuery = (query) => {
    setQuery(query)
    getbooks();

  }
  const getbooks = async () => {
    const res = await BooksApi.search(query);
    setSearchResults(res);
  };
  useEffect(() => {
    getbooks()
  }, []);

  const showingResults = searchResults

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {showingResults?.length > 0 && showingResults.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                              ((book.imageLinks && book.imageLinks.smallThumbnail) ?
                                `url(${book.imageLinks.smallThumbnail})` : "none")
                          }}>

                        </div>
                        <div className="book-shelf-changer">
                          <select onClick={(e) => handleCategory(book, e.target.value)} >
                            <option value={book.shelf}  >
                              Move to...
                            </option>
                            <option value="currentlyReading" >
                              Currently Reading
                            </option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none" >None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Search