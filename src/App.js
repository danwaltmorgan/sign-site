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

  const boards = data.map(board => {
    return (
      <div onClick={() => {
        setActive({...active, [board.id]: true})
        console.log(active[board.id])
      }}>
        <Board
        background={board.color}
        title={board.title}
        id={board.id}
        link={board.link}
        color={board.text}
        key={board.title}
        // active={active[`${board.id}`]}
        active={active[board.id]}
        // setActive={() => setActive()}
        // onClick={() => console.log(active)}
        >
          {/* <div> */}
            {/* <Exit/> */}
          {/* </div> */}
        </Board>
      </div>
    )
  })

  return (
    <div>
      {boards}
    </div>
  )
}
