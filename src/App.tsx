import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"
import Services from "./pages/Services/Services"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Services />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
