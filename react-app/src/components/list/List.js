import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components";
import ListItem from "./ListItem";
import "./List.scss";

const ListEditConfig = {
  emptyLabel: "List",

  isEmpty: function(props) {
    return !props || !props.items || props.items.length < 1;
  }
};

/**
 * List renders the list contents and maps wknd-events/components/content/list
 */
export default class List extends Component {
  render() {
    console.log(this.props);

    return (
      <div className='List ml-0 pl-0'>
        <ul className='List-wrapper'>
          {this.props.items &&
            this.props.items.map((listItem, index) => {
              return (
                <ListItem
                  path={listItem.path}
                  url={listItem.url}
                  title={listItem.title}
                  date={listItem.lastModified}
                  key={listItem.lastModified}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

MapTo("wknd-events/components/content/list")(List, ListEditConfig);
