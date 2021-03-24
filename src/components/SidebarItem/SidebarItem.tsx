import React from "react"
import { NavLink } from "react-router-dom"
import { Section } from "../../types/types"

import "./SidebarItem.css"

interface SidebarItemProps {
  section: Section
  activePage: string
  setActivePage: React.Dispatch<React.SetStateAction<string>>
}

const SidebarItem: React.FC<SidebarItemProps> = ({ section, activePage, setActivePage }) => {
  const { name, logo, activeLogo } = section

  const handleNavClick = () => {
    setActivePage(name)
  }

  return (
    <div className="sidebar-item">
      <NavLink to={`/#${name}`} onClick={handleNavClick}>
        <img className="sidebar-item__logo" src={activePage === name ? activeLogo : logo} alt={`${name} Link`} />
        <div className="sidebar-item__title">{name}</div>
      </NavLink>
    </div>
  )
}

export default SidebarItem
