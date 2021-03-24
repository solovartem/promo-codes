import React from "react"
import "./TopbarItem.css"

interface TopbarItemProps {
  title: string
  value: string
}

const TopbarItem: React.FC<TopbarItemProps> = ({ title, value }) => {
  return (
    <div className="topbar-item">
      <p className="topbar-item__title body-small">{title}</p>
      <p className="topbar-item__value headline-4">{value}</p>
    </div>
  )
}

export default TopbarItem
