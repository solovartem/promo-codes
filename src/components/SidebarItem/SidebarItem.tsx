import React from "react"
import "./SidebarItem.css"

interface SidebarItemProps {
  logo: string
  title: string
  active?: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ logo, title, active }) => {
  return (
    <div className="sidebar-item">
      <img className={`sidebar-item__logo ${active}`} src={logo} alt={`${title} Link`} />
      <div className="sidebar-item__title">{title}</div>
    </div>
  )
}

export default SidebarItem
