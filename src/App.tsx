import React from "react"
import "./App.css"
import Card from "./components/Card/Card"
import Filter from "./components/Filter/Filter"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="main">
          <h1 className="headline-1">Services</h1>
          <Filter />
          <div className="promos">
            <Card title="Siteconstructor.io" subtitle="Description Subtitle" />
            <Card title="Appvision.com" subtitle="Description Subtitle" />
            <Card title="Analytics.com" subtitle="Description Subtitle" />
            <Card title="Logotype" subtitle="Description Subtitle" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
