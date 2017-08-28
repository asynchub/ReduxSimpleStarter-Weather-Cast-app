// This is reducer function BookReducer
// reducer is the function that returns the piece of application state

// step 1: create the reducer here
// step 2: wire up the reducer to application (made in reducers/index)

export default function BookReducer() {
  return [
    {title: 'Wilkinson Trail', pages: 42},
    {title: "It's not over until i win", pages: 30},
    {title: 'Tremendous holidays', pages: 51},
    {title: 'Time to make things', pages: 3},
    {title: 'Motivate your self', pages: 4}
  ];
};
