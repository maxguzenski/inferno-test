import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Match, Link, Redirect, Miss } from 'react-router';
import styled from 'styled-components'


const P = styled.p`
  margin-bottom: 25px;
  color: ${props => props.color};
`

P.defaultProps = {
  color: 'green'
}

const Inner1 = ({text}) => (
  <h3>inner1 - {text}</h3>
)

const Inner2 = ({text}) => (
  <h3>inner2 - {text}</h3>
)



const Page1 = () => (
  <div>
    <h1>Page1</h1>

    <p>
      <Link to='/page1'>inner1</Link> - <Link to='/page1/inner2'>inner2</Link>
    </p>

    <Match exactly pattern="/page1"        component={Inner1} />
    <Match exactly pattern="/page1/inner2" component={Inner2} />
  </div>
)

const Page2 = () => (
  <div>
    <h1>Page2</h1>

    <p>
      <Link to='/page2'>inner1</Link> - <Link to='/page2/inner2'>inner2</Link>
    </p>

    <Match exactly pattern="/page2"        render={() => <Inner1 text='from page2 as render' />} />
    <Match exactly pattern="/page2/inner2" render={() => <Inner2 text='from page2 as render' />} />
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

        <Match pattern="/page1" component={Page1} />
        <Match pattern="/page2" component={Page2} />
        <Miss  render={() => <Redirect to="/page1" />} />
      </div>
    );
  }
}


export default () => (
  <BrowserRouter><App /></BrowserRouter>
);
