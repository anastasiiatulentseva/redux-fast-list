import React, { PropTypes } from 'react'
import ChecklistItem from "../../containers/checklist/ChecklistItem"

const Checklist = ({ items }) => {
  return (
    <div>
      <h1>Items</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          {items.map(item =>
            <ChecklistItem key={item.id} item={item}/>
          )}
        </ul>
      </div>
    </div>
  )
}

Checklist.propTypes = {
  items: PropTypes.array.isRequired
}

export default Checklist
