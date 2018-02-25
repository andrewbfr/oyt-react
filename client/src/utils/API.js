import axios from "axios";
import nytApi from "../keys.js";
const BASEURL =
"https://api.nytimes.com/svc/search/v2/articlesearch.json";

// const query = "&q=iphone";

// const beginSearch = "&begin_date=20120101";

// const endSearch = "&end_date=20121231";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
// Export an object with a "search" method that searches the Giphy API for the passed query
  search: function(query) {
    return axios.get(BASEURL + nytApi + query );
  }
};
