import React from 'react'

class MovieRow extends React.Component{
  viewMovie() {
    const url = "http://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
  render() {
    const {movie} = this.props;
    return <table key={this.props.movie.id}>
      <tbody>
        <div>
          <h3>Popular Movies</h3>
        </div>
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
          <input type="button" className="btn btn-primary" onClick={this.viewMovie.bind(this)} value="View"/>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow
