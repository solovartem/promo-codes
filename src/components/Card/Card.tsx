/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios"
import cn from "classnames"
import React, { useState } from "react"
import { Service } from "../../types/interfaces"
import copyToClipboard from "../../utils/copyToClipBoard"
import "./Card.css"

interface CardProps {
  service: Service
}

const Card: React.FC<CardProps> = ({ service }) => {
  const { id, title, subtitle, promocode, activated } = service
  const [activatedState, setActivatedState] = useState(activated)

  const handleCopy = () => {
    copyToClipboard(promocode)
  }

  const handleActivate = () => {
    setActivatedState(true)
    axios.patch(`http://localhost:3003/services/${id}`, { activated: true })
  }

  return (
    <div className="card">
      <div className="card__info">
        <p className="card__title card-title">{title}</p>
        <p className="card__subtitle card-subtitle">{subtitle}</p>
      </div>
      <div className="card__promo">
        <div className="card__promo-group">
          <div className="card__promo-label label">Promocode</div>
          <div className="card__promo-container input-text">
            <div className="body-normal">{promocode}</div>
            <button type="button" onClick={handleCopy}>
              <img className="card__promo-copy" src="/copy.svg" alt="" />
            </button>
          </div>
        </div>
        <button
          disabled={activatedState}
          onClick={handleActivate}
          className={cn(["card__promo-button body-lead", { disabled: activatedState }])}
          type="button"
        >
          {activatedState ? "Already Activated" : "Activate Bonus"}
        </button>
      </div>
    </div>
  )
}

export default Card
