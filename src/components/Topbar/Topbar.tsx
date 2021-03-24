import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { Financial } from "../../types/types"
import TopbarItem from "../TopbarItem/TopbarItem"

import "./Topbar.css"

const Topbar: React.FC = () => {
  const [financials, setFinancials] = useState<Financial[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchFinancials()
      setFinancials(result)
    }
    fetchData()
  }, [])

  return (
    <div className="topbar">
      {financials.map((financial) => (
        <TopbarItem key={financial.id} title={financial.type} value={financial.amount} />
      ))}
    </div>
  )
}

export default Topbar
