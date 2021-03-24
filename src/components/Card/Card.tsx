/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import "./Card.css"

interface CardProps {
  title: string
  subtitle: string
}

const Card: React.FC<CardProps> = ({ title, subtitle }) => {
  return (
    <div className="card">
      <div className="card__info">
        <p className="card__title card-title">{title}</p>
        <p className="card__subtitle card-subtitle">{subtitle}</p>
      </div>
      <form className="card__form" action="#">
        <div className="card__form-input-group">
          <label className="card__form-label label" htmlFor="promoInput">
            Promocode
          </label>
          <div className="card__form-input-container">
            <input id="promoInput" className="card__form-input input-text body-normal" type="text" />
            {/* <img className="card__form-copy" src="/copy.svg" alt="" /> */}
          </div>
        </div>
        <input className="card__form-button body-lead" type="button" value="Activate Bonus" />
      </form>
    </div>
  )
}

export default Card
