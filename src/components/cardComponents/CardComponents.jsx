import React from 'react'
import style from './cardComponents.module.css'

const CardComponents = (card) => {
  return (
    <div className={style.card}>
      <img src={card.img} alt="" />
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </div>
  );
}

export default CardComponents