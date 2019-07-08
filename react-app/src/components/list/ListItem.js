import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.scss";

/**
 * ListItem renders the individual items in the list
 */
export default class ListItem extends Component {
  get date() {
    if (!this.props.date) {
      return null;
    }
    let date = new Date(this.props.date);
    return date.toLocaleDateString("es-ES");
  }

  render() {
    if (!this.props.path || !this.props.title || !this.props.url) {
      return null;
    }
    return (
      <Link className='ListItem-link text-left text-info' to={this.props.url}>
        <li
          className='ListItem text-info text-truncate px-4 mb-2'
          key={this.props.path}>
          {this.props.id && `${this.props.id}. `}
          {this.props.title}
          <br />
          <span className='ListItem-date py-2'>{this.date}</span>
        </li>
      </Link>
    );
  }
}
