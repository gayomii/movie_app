import React from 'react';
import PropTypes from 'prop-types';

const loveFood = [
    { id : 1,
      name : 'Kimchi',
      script : 'Kimchi is Korean Food',
      rating : 4.8
    },
    { id : 2,
      name : 'Kimbop',
      script : 'Kimbop is love...',
      rating : 5.0
    },
    { id : 3,
      name : 'Samgiopsal',
      script : 'Samgiopsal is very very delicious',
      rating : 4.9
    },
    { id : 4,
      name : 'Apple',
      script : 'Apple is Fruit',
      //rating : 4.5
    }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  script: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function Food({name, script, rating}) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h6>{rating}/5.0</h6>
      <h5>{script}</h5>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {loveFood.map(dish => (<Food key = {dish.id} name = {dish.name} script = {dish.script} rating = {dish.rating}/>))}
    </div>
  );
}

export default App;
