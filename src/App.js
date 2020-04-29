import React from 'react';
import axios from 'axios';
import Movies from './Movie';
import "./App.css";

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
      <section className="container">
        {isLoading ? (<div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
        <div className="movies">
          {movies.map(movies => (
            <Movies 
              key={movies.id}
              id={movies.id} 
              year={movies.year} 
              title={movies.title} 
              summary={movies.summary} 
              poster={movies.medium_cover_image}
              genres={movies.genres} 
            />
          ))}  
        </div>
        )}
      </section>
    );
  }
}

export default App;
