import React from 'react'

const SeatchItems = ({search, setsearch}) => {
  return (
    <form>
        <label>Search</label>
        <input placeholder='Search'
            value={search}
            onChange={(e)=>setsearch (e.target.value)}
        />
    </form>
  )
}

export default SeatchItems