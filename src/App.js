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

const Inner1 = <h3>inner1</h3>
const Inner2 = <h3>inner1</h3>


const Page1 = () => (
  <div>
    <h1>Page1</h1>

    <p>
      <Link to='/page1/inner1'>inner1</Link> - <Link to='/page1/inner2'>inner2</Link>
    </p>

    <div>
      <Match pattern="/page1/inner1" component={Inner1} />
      <Match pattern="/page1/inner2" component={Inner2} />
    </div>
  </div>
)

const Page2 = () => (
  <div>
    <h1>Page2</h1>

    <p>
      <Link to='/page2/inner1'>inner1</Link> - <Link to='/page2/inner2'>inner2</Link>
    </p>

    <div>
      <Match pattern="/page2/inner1" component={Inner1} />
      <Match pattern="/page2/inner2" component={Inner2} />
    </div>
  </div>
)


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
          <Match pattern="/"      component={Page1} />
          <Match pattern="/page2" component={Page2} />
        </div>
      </div>
    );
  }
}


export default () => (
  <BrowserRouter><App /></BrowserRouter>
);
