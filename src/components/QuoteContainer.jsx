import React, { Component } from 'react';
import Quote from './Quote';
import Memories from './Memories';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Not much inspiration here...',
      memories: []
   };
    this.handleGetQuoteClick = this.handleGetQuoteClick.bind(this);
    this.handleSaveMemoryClick = this.handleSaveMemoryClick.bind(this);
    this.handleClearMemoryClick = this.handleClearMemoryClick.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  async fetchQuote () {
    const response = await fetch('https://api.kanye.rest')
    const quote = await response.json();
    return quote;
  }

  handleGetQuoteClick() {
    this.fetchQuote()
    .then((response) => {
      this.setState(state => ({
        quote: response.quote
      }));
    })
    .catch((error) => console.log(error))
  }

  handleSaveMemoryClick() {
    const { quote, memories } = this.state;
    if (!memories.includes(quote)) {
      const tempMemories = memories.slice(0);
      tempMemories.push(quote);
      this.setState(state => ({
        memories: tempMemories
      }));
    }
  }

  handleClearMemoryClick() {
    this.setState(state => ({
      memories: []
    }));
  }

  render() {
    return (
      <>
      <div className="container">
        <Quote quote={this.state.quote} />
      </div>
      <div className="container">
        <button className="button" onClick={this.handleGetQuoteClick} >Inspire me</button>
        <button className="button" onClick={this.handleSaveMemoryClick} >Save my Inspiration</button>
        <button className="button" onClick={this.handleClearMemoryClick} >Wipe my Memory</button>
      </div>
      <div className="container">
        <Memories memories={this.state.memories} />
      </div>
      </>
    );
  }
}

export default QuoteContainer;