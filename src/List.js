import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const List = ({porul,maathu,edu}) => {
  return (
    <li className="dappa" key={porul.id}>
          <input
            type="checkbox"
            onChange={() => maathu(porul.id)}
            checked={porul.checked}
          />
          <label
            style={porul.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => maathu(porul.id)}
          >
            {porul.porul}
          </label>
          <FaTrashAlt
            onClick={() => edu(porul.id)}
            role="button"
            tabIndex="0"
          />
        </li>
  )
}

export default List