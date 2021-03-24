import axios from "axios"
import React, { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card/Card"
import Filter from "./components/Filter/Filter"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"
import { Service } from "./types/interfaces"

const App: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    axios.get("http://localhost:3003/services").then((res) => setServices(res.data))
  })

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="main">
          <h1 className="headline-1">Services</h1>
          <Filter />
          <div className="promos">
            {services.map((service) => (
              <Card key={service.id} service={service} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
