import React, {Component} from 'react';
import './Header.scss';
 
export default class Header extends Component {
 
  render() {
      return (
      <header className="Header bg-primary">
          <div className="Header-wrapper">
              <h1 className="Header-title py-3">WKND<span className="Header-title--inverse">_</span></h1>
          </div>
        </header>
      );
  }
}