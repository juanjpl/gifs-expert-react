

import React from 'react'

export const GifItem = ({id,title,url}) => {
  return (
    <div className="card">
      <h2>id:</h2>
      <h2>{id} </h2>
    
      <img src={url} alt={title} />
      <p>{title} </p>

    </div>

  )
}
