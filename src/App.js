import React from 'react';
import axios from 'axios';
import Movies from './Movies';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false}); //movies 받아옴
  }
  componentDidMount(){
    this.getMovies();
  };
  
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        {isLoading ? (<div class="loader">
          <span class="loader__text">Loading...</span>
        </div>
        ) : (
        <div class="movies">
          {movies.map(movies => (
            <Movies 
              id={movies.id} 
              year={movies.year} 
              title={movies.title} 
              summary={movies.summary} 
              poster={movies.medium_cover_image} 
            />))}  
          </div>
        )}
      </section>
    );
  }
}

export default App;
