import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// any key of the object that we provide here ends up as a key on the global state of application
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
// reducer is the function that returns the piece of application state
// step 1 create the reducer (see reduser_books.js)
// step 2 for reducer: wire up the reducer to application
