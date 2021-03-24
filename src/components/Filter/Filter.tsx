import React from "react"
import "./Filter.css"

interface FilterProps {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const handleChange = (event: { target: { value: string } }) => {
    setFilter(event.target.value)
  }

  const handleReset = () => {
    setFilter("")
  }

  return (
    <div className="filter">
      <p className="filter__title label">Filter</p>
      <form className="filter__form" action="#">
        <input
          className="filter__form-input input-text body-normal"
          value={filter}
          onChange={handleChange}
          type="text"
        />
        <button className="filter__form-button body-lead" type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  )
}

export default Filter
