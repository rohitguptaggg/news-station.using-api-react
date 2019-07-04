//import React, { Component } from 'react';
import React from 'react';
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=7f95796499714c85972b718880114b35')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          articles: myJson.articles
        });
      });
  }
  render() {
    console.log(this.state);
    return (

      <div className="">
        <div className="row">
          {this.state.articles.map((item, index) => {
            return (
              <div className="col s6 l6 m6">
                <div className="card responsive-img round-border z-depth-1 hoverable responsive-img left-align">
                  <div className="card-image z-depth-1">
                    <img src={item.urlToImage} alt="img not found" classNAme="" height="300px">

                    </img>
                    <span className="card-title white-text ">{item.title}</span>
                  </div>
                  <div className="card-content blue-text truncate">
                    <p>{item.content}</p>
                  </div>
                  <div className="card-action">
                    <a href={item.url} target="blank">ReadMore....</a>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    );
  }
}


export default Body;

