import React from 'react';

function Card(props) {
  const { name, age, country } = props.user;

  return (
    <div className='main-data'>
      <h1> name {name}, age {age}, country {country}</h1>
    </div>
  );
}

export default Card;