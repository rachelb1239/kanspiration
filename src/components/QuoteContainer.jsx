import React, { Component } from 'react';
import Quote from './Quote';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: 'quotie boi' };
    this.handleClick = this.handleClick.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  async fetchQuote () {
    const response = await fetch('https://api.kanye.rest')
    const quote = await response.json();
    return quote;
  }

  handleClick() {
    this.fetchQuote()
    .then((response) => {
      this.setState(state => ({
        quote: response.quote
      }));
    })
    .catch((error) => console.log(error))
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