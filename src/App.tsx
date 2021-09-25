import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './components/Main';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={Main} />
        <Footer />
      </div>
    );
  }
}
