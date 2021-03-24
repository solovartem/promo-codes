import React from "react"
import "./Filter.css"

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <p className="filter__title label">Filter</p>
      <form className="filter__form" action="#">
        <input className="filter__form-input input-text body-normal" type="text" />
        <input className="filter__form-button body-lead" type="button" value="Reset" />
      </form>
    </div>
  )
}

export default Filter
