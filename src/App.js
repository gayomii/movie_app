import React from 'react';
import axios from 'axios';
import Movies from './Movies';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };
  getMovies= async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();

  };
  
  render(){
    const {isLoading, movies} = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : movies.map(movie => {
          console.log(movie);
          return <Movies id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} pster={movie.medium_cover_image} />
        })}</h1>
      </div>
    );
  }
}

export default App;
