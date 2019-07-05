import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Header.scss";

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
          className='Header-action text-warning font-weight-bold'
          to={this.props.navigationRoot + ".html"}>
          Home
        </Link>
      );
    }
    return null;
  }

  render() {
    return (
      <header className='Header bg-primary'>
        <div className='Header-wrapper'>
          <h1 className='Header-title font-weight-bold py-3'>
            WKND<span className='Header-title--inverse'>_</span>
          </h1>
          <div className='Header-tools py-3'>{this.homeLink}</div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
