import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import "../../utils/Icons";

class Header extends Component {
  get homeLink() {
    let currLocation;
    currLocation = this.props.location.pathname;
    currLocation = currLocation.substr(0, currLocation.length - 5);

    if (
      this.props.navigationRoot &&
      currLocation !== this.props.navigationRoot
    ) {
      return (
        <Link
          className='Header-action mt-auto'
          to={this.props.navigationRoot + ".html"}>
          <FontAwesomeIcon icon='chevron-left' />
        </Link>
      );
    }
    return null;
  }

  /* activeLink() {
    let currLocation;
    currLocation = this.props.location.pathname;
  } */

  render() {
    return (
      <header className='Header'>
        <div className='Header-wrapper'>
          <h1 className='Header-title font-weight-bold mt-auto'>
            <Link to={this.props.navigationRoot + ".html"}>
              WKND<span className='Header-title--inverse'>_</span>
            </Link>
          </h1>
          <nav className='navbar navbar-expand-lg navbar-light mt-auto'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item px-2 active'>
                  <Link
                    to={this.props.navigationRoot + ".html"}
                    className='text-light'>
                    HOME <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link
                    to={this.props.root + "/articles.html"}
                    className='text-light'>
                    ARTICLES <span className='sr-only'>(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className=''>{this.homeLink}</div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
