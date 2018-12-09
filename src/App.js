import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList/MovieList.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import debounce from 'lodash/debounce';
import HomePage from './HomePage/HomePage.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchReturned : false
    };
    this.results = [];
    this.search = debounce(this.search.bind(this), 300);
    console.log(debounce);
  }

  performSearch(searchTerm) {

    console.log("Perform search movie db");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=ddb907d69f1671fabdfd75c40b664a37&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log("**** searchResults: ",searchResults);
        this.results = searchResults.results;
        //console.log(results[0])
        this.results.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average));
        this.setState({searchReturned: true});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  search(searchTerm){
    if (!searchTerm)
      return this.setState({searchReturned: false});
    this.performSearch(searchTerm);
  }

  render() {
    const content = this.state.searchReturned ?
              <MovieList results={this.results}> </MovieList>:
              <HomePage> </HomePage>;
    return (
      <div >

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="searchBox">
          <input className="form-control" onChange={(e) => this.search(e.target.value)} type="text" placeholder="Search for a movie..."/>
        </div>

        <div className="movieList">
          {content}
        </div>

      </div>
    );
  }
}

export default App;
