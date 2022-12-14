import React from 'react'
import { Link } from 'react-router-dom';


const Home = ({books, handleCategory}) => {
  

  let currentlyReadingShelf = books
    .filter(book => book.shelf === 'currentlyReading')
  let WantToReadShelf = books
    .filter(book => book.shelf === 'wantToRead')
  let ReadShelf = books
    .filter(book => book.shelf === 'read')

  return (
    <div>
      <div className="list-books" >
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>

              <div className="bookshelf-books">

                <ol className="books-grid">
                  {currentlyReadingShelf?.map((book) => {
                    return (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">

                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                  `url(${book.imageLinks.thumbnail
                                  })`
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select onClick={(e) => handleCategory(book,e.target.value)}>
                                <option value={book.shelf} >
                                  Move to...
                                </option>
                                <option value="currentlyReading" >
                                  Currently Reading
                                </option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    )
                  })}
                </ol>

              </div>


            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {WantToReadShelf?.map((book) => {
                    return (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                  `url(${book.imageLinks.thumbnail
                                  })`
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select onClick={(e) => handleCategory(book,e.target.value)} >
                                <option value={book.shelf}  >
                                  Move to...
                                </option>
                                <option value="currentlyReading" >
                                  Currently Reading
                                </option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title"> Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {ReadShelf?.map((book) => {
                    return (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                  `url(${book.imageLinks.thumbnail
                                  })`
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select onClick={(e) => handleCategory(book,e.target.value)} >
                                <option value={book.shelf}  >
                                  Move to...
                                </option>
                                <option value="currentlyReading">
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
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'> </Link>
        </div>
      </div>


    </div>
  )
}

export default Home