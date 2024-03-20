import React from 'react'
import style from './cardArticle.module.css'

const CardArticle = (card) => {
  return (
    <div className={style.card}>
      <img src={card.img} alt="" />
      <div className={style.info}>
        <h2>{card.title}</h2>
        <p>{card.text}</p>
        <h4>{card.date}</h4>
        <div className={style.square}></div>
      </div>
    </div>
  )
}

export default CardArticle