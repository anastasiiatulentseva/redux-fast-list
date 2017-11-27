import React, { PropTypes } from 'react'

const CheckboxElement = ({ item, onChangeItem }) => {
  console.log("count rendering")
  return (
    <li className="list-group-item">
      <label className="form-check-label">
        <input id={item.id}
               className="custom-control-input"
               type="checkbox"
               checked={item.checked}
               onChange={onChangeItem}
        />
        {item.label}
      </label>
    </li>
  )
}

CheckboxElement.propTypes = {
  item: PropTypes.object.isRequired,
  onChangeItem: PropTypes.func.isRequired
}

export default CheckboxElement
