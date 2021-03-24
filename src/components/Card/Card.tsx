import React, { useState } from "react"
import cn from "classnames"
import api from "../../services/api"
import { Service } from "../../types/types"
import copyToClipboard from "../../utils/copyToClipBoard"

import "./Card.css"

interface CardProps {
  service: Service
  handleNotification: () => void
}

const Card: React.FC<CardProps> = ({ service, handleNotification }) => {
  const { id, title, subtitle, promocode, activated } = service
  const [activatedState, setActivatedState] = useState(activated)

  const handleCopy = () => {
    copyToClipboard(promocode)
    handleNotification()
  }

  const handleActivate = () => {
    const activate = async () => {
      await api.activateService(id)
      setActivatedState(true)
    }
    activate()
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
          {activatedState ? "Activated" : "Activate Bonus"}
        </button>
      </div>
    </div>
  )
}

export default Card
