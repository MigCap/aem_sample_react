import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components";
import ReactPaginate from "react-paginate";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../utils/Icons";
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
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      limitPerPage: 5
    };
  }

  componentDidMount() {
    this.getMockData();
  }

  getMockData = async pageCount => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          pageCount: json.length / this.state.limitPerPage
        });
        this.getPageMockData(1);
      });
  };

  getPageMockData = async pageCount => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${pageCount}&_limit=${
        this.state.limitPerPage
      }`
    )
      .then(response => response.json())
      .then(json =>
        this.setState({
          data: json
        })
      );
  };

  handlePageClick = data => {
    let selected = data.selected + 1;
    // let offset = Math.ceil(selected * this.props.perPage);
    this.getPageMockData(selected);
  };

  render() {
    const { data } = this.state;

    if (data) {
      return (
        <div className='List ml-0 pl-0 mb-5'>
          <h4>From AEM</h4>

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
            <h4 className='my-3 mt-5'>Fetched from API</h4>

            {data &&
              data.map((dataItem, index) => {
                return (
                  <div key={index}>
                    <ListItem
                      path='/content/wknd-events/react/home/first-article'
                      url='/content/wknd-events/react/home/first-article.html'
                      date={new Date()}
                      title={dataItem.title}
                      id={dataItem.id}
                    />
                  </div>
                );
              })}
          </ul>
          <div className='my-5'>
            <ReactPaginate
              previousLabel={<FontAwesomeIcon icon='chevron-left' />}
              nextLabel={<FontAwesomeIcon icon='chevron-right' />}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      );
    }
    return <p>Loading ...</p>;
  }
}

MapTo("wknd-events/components/content/list")(List, ListEditConfig);
