import React from "react"
import SidebarItem from "../SidebarItem/SidebarItem"
import "./Sidebar.css"

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <img className="brand-logo" src="/Glyph.svg" alt="Glyph Logo" />
      <div className="navbar">
        <SidebarItem logo="/ICON.svg" title="Dashboard" />
        <SidebarItem logo="/ICON.svg" title="Reports" />
        <SidebarItem logo="/ICON.svg" title="Statistics" />
        <SidebarItem logo="/ICON.svg" title="Offers" />
        <SidebarItem logo="/ICON.svg" title="Tools" />
        <SidebarItem logo="/ICON.svg" title="Developers" />
        <SidebarItem logo="/ICON_active.svg" title="Services" />
        <SidebarItem logo="/ICON.svg" title="Finances" />
      </div>
    </div>
  )
}

export default Sidebar
