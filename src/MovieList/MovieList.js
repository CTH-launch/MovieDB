import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component{


  render() {
    
    const movieListTags = this.props.results.map((movie)=>(<Movie key={movie.id} movie={movie}></Movie>));
    console.log("In MovieList: ", this.props, movieListTags);
    return (<div>
        {movieListTags}
      </div>);
  }
}

export default MovieList
