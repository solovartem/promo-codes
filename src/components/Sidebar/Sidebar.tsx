import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import api from "../../services/api"
import { Section } from "../../types/types"
import SidebarItem from "../SidebarItem/SidebarItem"

import "./Sidebar.css"

const Sidebar: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([])
  const [activePage, setActivePage] = useState("Services")

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchSections()
      setSections(result)
    }
    fetchData()
  }, [])

  return (
    <div className="sidebar">
      <NavLink to="/#Dashboard">
        <img className="brand-logo" src="/Glyph.svg" alt="Glyph Logo" />
      </NavLink>
      <div className="navbar">
        {sections.map((section) => (
          <SidebarItem key={section.id} section={section} activePage={activePage} setActivePage={setActivePage} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
