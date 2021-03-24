import React from "react"
import TopbarItem from "../TopbarItem/TopbarItem"
import "./Topbar.css"

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <TopbarItem title="Balance" value="213 920" />
      <TopbarItem title="Payout" value="159 465" />
    </div>
  )
}

export default Topbar
