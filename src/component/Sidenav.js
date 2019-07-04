import React from 'react';
class Sidenav extends React.Component {
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
        return (
                    
              
            <div className="collection with-header">
                <ul>
                <li class="collection-header"><h4>News Channels</h4></li>
                
                    {this.state.articles.map((item, index) => {
                        return (
                            <div className="row" >
                                <a href={item.url} target="blank"> <li className=" collection-item grey-text">{item.source.name}</li></a>
                            </div>
                        );
                    })}
                </ul>
            </div>



        );
    }
}

export default Sidenav;