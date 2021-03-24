import axios from "axios"
import React, { useEffect, useState } from "react"
import { Financial } from "../../types/interfaces"
import TopbarItem from "../TopbarItem/TopbarItem"
import "./Topbar.css"

const Topbar: React.FC = () => {
  const [financials, setFinancials] = useState<Financial[]>([])

  useEffect(() => {
    axios.get("http://localhost:3003/financials").then((res) => setFinancials(res.data))
  })
  return (
    <div className="topbar">
      {financials.map((financial) => (
        <TopbarItem key={financial.id} title={financial.type} value={financial.amount} />
      ))}
    </div>
  )
}

export default Topbar
