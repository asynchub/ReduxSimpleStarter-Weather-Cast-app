// This is reducer function ActiveBook
// reducer is the function that returns the piece of application state

// state argument here is not application state, only the piece of state this reducer is responsible for and produced by this reducer
// for example: statement in reducer: state += 1, action will trigger the same state change, same state keeps flowing here
// reducers are only ever called, whenever action is dispatched by the application
// therefore, we need to handle the case passing same state through, when we dont care about action
// and write statement on switch statement, when we care about action
export default function ActiveBook(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED': // in case of action type book selected
    return action.payload; // return actions payload, which is the selected book, stated in this action creator
    // dont: state.title = book.title, means never ever mutate current state
  }
  return state; // when dont care
};
// when user first boots the app up and no book is selected yet
// we need to return default not undefined value state = null as an argument
