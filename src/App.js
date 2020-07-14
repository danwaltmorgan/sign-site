import React, { useState } from 'react'
import Board from './Board'
import './index.css'
import data from './data' // contains styling information about the boards


export default function App() {

  const [active, setActive] = useState(
    {
    about: false,
    charity: false,
    shop: false,
    contact: false,
    gallery: false
  }
)
  function handleExit(id) {
    setActive({...active, [id]: false})
    console.log(active)
  }

  function handleActive(id) {
    if (active[id] === false)
      setActive({...active, [id]: true})
  }


  const boards = data.map(board => {
    return (
      <div
        id={board.id}
        onClick={(e) => handleActive(board.id)}
      >
        <Board
        background={board.color}
        title={board.title}
        id={board.id}
        link={board.link}
        color={board.text}
        key={board.title}
        active={active[board.id]}
        handleExit={handleExit}
        clicked={board.id}
        />
      </div>
    )
  })

  return (
    <div>
      {boards}
    </div>
  )
}
