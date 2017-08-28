import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect is a function from 'react-redux'
import _ from 'lodash';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  // returns the list of books
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)} // event handler, that calls action creator on click
          key={book.title} // unique key that finds to render / rerender title, that just mapped to particular list item
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      // js value, that calls renderList helper function declared above
    );
  }
}

// I CONTAINER
// having data and view, need to make component to be smart one: container -
// need a merger to combine redux (data) and react (view) -
// to forge the connection between redux (app state) and actual component.
// the container from react-redux forms the bridge between React and redux
// the container is a component that is aware about the state that is contained by Redux
// container is a component that has direct access to state, that is produced by Redux
// so, take react component and inject state into it with container from react-redux


// mapStateToProps is the function -
// the glue function between react and redux
// it maps state to props
// takes app state as argument
// retuns the object with props of this component
function mapStateToProps(state) {
  // whatever object is returned, the properties of this will be available to this component as this.props
  return (
    {
      books: state.books
    }
  );
}
// whenever app state changes, the container will be instantly rerendered with all of it's childs


// II ACTION
// action creator is function that returns an object
// 1: write action creator (made in actions/index),
// 2: wire action creator to redux to show it up in the right place (made in reducers/index)
// 3: connect the component (container) by binding the action to component (made here)
// import the action creator into the component (container)
// import the function bindActionCreators from redux into the component (container)
// bindActionCreators is the function that makes action (generated by action creator) to flow throughout all the reducers of application
// bindActionCreators takse the return value from action creator and makes it flow throughout all reducers of application
// define function mapDispatchToProps with argument dispatch
// and return bindActionCreators with arguments:
// object {key: value}, that is returned from action creator and
// and second argument dispatch
// finally, add mapDispatchToProps as the second argument on the first call of connect function from react-redux
// Anything we pass in return statement here as an argument of bindActionCreators will end up as props to this component (container)
// so now this.props.selectBook can be called witin this component, and it will call the action creator
function mapDispatchToProps(dispatch) {
  // bindActionCreators is doing here: whenever selectBook action creator is called, the result should be passed to all of our reuders through dispatch function
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // dispatch function as an argument is taking all the actions from bindActionCreators, receives actions like funnel and sends to reducers of application
}


// promotes BookList from a component to be a container - it needs to know about method selectBook. Make it available as a prop
// makes the connection from redux to get state of BookList component. app state property should have books prop then.
// takes this function mapStateToProps, takes this component, and returns this container
export default connect(mapStateToProps, mapDispatchToProps)(BookList); // 2 separate calls here with 2 things passed
// whenever the app state changes, the object and the state function will be assigned as props to component
