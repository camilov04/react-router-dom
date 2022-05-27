import React from 'react'

export const ContadorNum = (style, textButton, event) => {
  return (
    <button className={style} onClick={event}>{textButton} </button>
  )
}
