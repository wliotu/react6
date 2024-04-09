import React from 'react';
import styles from './Card.module.css'

function Card(props) {
  const { name, age, country } = props.user;

  return (
    <div className={styles['main_block']}>
      <h1> 
        Hello {name}
      </h1>
      <p className={styles.title}> name: {name} </p>
      <p> age: {age} </p>
      <p> country: {country} </p>
    </div>
  );
}

export default Card;