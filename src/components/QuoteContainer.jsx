import React, { Component } from 'react';
import Quote from './Quote';

class QuoteContainer extends Component {
  render() {
    return (
      <>
        <Quote quote='cool quote'/>
        <button>Inspire me</button>
      </>
    );
  }
}

export default QuoteContainer;