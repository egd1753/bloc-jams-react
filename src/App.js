import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing.js';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span id='appheader-title' >Bloc Jams</span>
              <div className="mdl-layout-spacer"></div>
              
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link"><Link id='landing-link' to='/'>Landing </Link></a>
                <a className="mdl-navigation__link"><Link id='library-link' to='/library'> Library</Link></a>
              </nav>

            </div>
          </header>

          <main className="mdl-layout__content">
            <div className="page-content">
              <Route exact path="/" component={Landing} />
              <Route path="/library" component={Library} />
              <Route path="/album/:slug" component={Album} />
            </div>
          </main>
        </div>

      </div>
    );
  }
}

export default App;
