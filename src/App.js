import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import styled from 'styled-components'


const P = styled.p`
  margin-bottom: 25px;
  color: ${props => props.color};
`

P.defaultProps = {
  color: 'green'
}


const Page1 = () => <h1>Page 1</h1>
const Page2 = () => <h1>Page 2</h1>


class App extends Component {
  render() {
    return (
      <div className="App">
        <P>This should be green (by default props)</P>
        <P color='red'>This should be red</P>

        <p>
          <Link to='/'>page1</Link> - <Link to='/page2'>page2</Link>
        </p>

        <div>
          <Match pattern="/" exactly component={Page1} />
          <Match pattern="/page2" component={Page2} />
        </div>
      </div>
    );
  }
}



export default () => (
  <BrowserRouter><App /></BrowserRouter>
);
