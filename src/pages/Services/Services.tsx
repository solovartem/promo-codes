import React, { useEffect, useState } from "react"
import ReactNotification, { store } from "react-notifications-component"
import api from "../../services/api"
import { Service } from "../../types/types"

import Card from "../../components/Card/Card"
import Filter from "../../components/Filter/Filter"
import Footer from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"

import "react-notifications-component/dist/theme.css"

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchServices()
      setServices(result)
    }
    fetchData()
  }, [])

  const handleNotification = (): void => {
    store.addNotification({
      title: "Copied!",
      message: "You have copied the promo code",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    })
  }

  return (
    <div className="App">
      <ReactNotification />
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="main">
          <h1 className="headline-1">Services</h1>
          <Filter filter={filter} setFilter={setFilter} />
          <div className="promos">
            {services
              .filter((service) => service.title.toLowerCase().includes(filter))
              .map((service) => (
                <Card key={service.id} service={service} handleNotification={handleNotification} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Services
