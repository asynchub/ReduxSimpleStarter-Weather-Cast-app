import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>Select the book to show details</div>
      );
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>
          Title: {this.props.book.title}
        </div>
        <div>
          pages: {this.props.book.pages}
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    // refer to the piece of state, needed for this component (container)
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
