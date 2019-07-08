import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.scss";

/**
 * ListItem renders the individual items in the list
 */
export default class ListItem extends Component {
 
    get date() {
       if(!this.props.date) {
           return null;
       }
        let date = new Date(this.props.date);
        return date.toLocaleDateString('en-US');
    }
 
    render() {
        if(!this.props.path || !this.props.title || !this.props.url) {
            return null;
        }
        return (
            <li className="ListItem mb-2" key={this.props.path}>
                <Link className="ListItem-link btn btn-block text-left" to={this.props.url}>{this.props.title}
                    <span className="ListItem-date py-2">{this.date}</span>
                </Link>
            </li>
        );
    }
}