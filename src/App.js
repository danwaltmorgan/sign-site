import React, { useState, useEffect} from 'react'
import Board from './Board'
import './index.css'
import data from './data' // contains styling information about the boards
import Exit from './Exit'


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

// Lift props up!!!

  function handleExit(id) {
    setActive({...active, [id]: false})
    console.log(active)
  }

  const boards = data.map(board => {
    return (
      <div onClick={() => {
        if (active[board.id] === false) {
          setActive({...active, [board.id]: true})
          // console.log(active[board.id])
        }
        // else {
        //   setActive({...active, [board.id]: false})
        // }
      }}>
        <Board
        background={board.color}
        title={board.title}
        id={board.id}
        link={board.link}
        color={board.text}
        key={board.title}
        active={active[board.id]}

        onExit={handleExit}

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
