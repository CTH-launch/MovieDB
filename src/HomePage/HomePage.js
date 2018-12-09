import React, { Component } from 'react';
import $ from 'jquery'
import MovieRow from './MovieRow'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch();
  }

  performSearch() {
    console.log("perform intial search");
    const urlString = "https://api.themoviedb.org/3/movie/top_rated?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1";
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results;
        var movieRows = [];
        results.forEach((movie) => {
          console.log(movie.title);
          const movieRow = <MovieRow movie = {movie}/>;
          movieRows.push(movieRow);
        })
        this.setState({rows: movieRows});
      },
      error: (xhr, status, err) => {
        console.error("failed on fetch");
      }
    })

  }
  render() {
    return (
      <div>
        <div>
          <h3>Popular Movies</h3>
        </div>
        {this.state.rows}
      </div>
    );
  }


}

export default HomePage;
