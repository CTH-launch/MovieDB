import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
	constructor(props) {
		super(props);
		this.viewMovie = this.viewMovie.bind(this);

	}

  viewMovie(e) {
    const url = "http://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    const {movie} = this.props;
    return (

      <table key={movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="200" src={'https://image.tmdb.org/t/p/w185'+movie.poster_path}/>
          </td>
          <td>
            <h4>{movie.title}</h4>
						<p>
							<tr>
                <td>
                  Rate:{movie.vote_average}
                </td>
                <td width="20"/>
                <td>
                  Release Date:{movie.release_date}
                </td>
              </tr>
						</p>
            <p>{movie.overview}</p>
          <input type="button" className="btn btn-primary" onClick={this.viewMovie} value="View"/>
          </td>
        </tr>
      </tbody>
    </table>
    );
  }
}

export default Movie;
