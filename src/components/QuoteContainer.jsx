import React, { Component } from 'react';
import Quote from './Quote';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: 'quotie boi' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      quote: 'random quotie boi'
    }));
  }

  render() {
    return (
      <>
        <Quote quote={this.state.quote} />
        <button className="button" onClick={this.handleClick} >Inspire me</button>
      </>
    );
  }
}

export default QuoteContainer;