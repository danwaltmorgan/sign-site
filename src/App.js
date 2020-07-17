import React, { useState } from 'react'
import Board from './Board'
import './index.css'
import data from './data' // contains styling information about the boards


export default function App() {

  const defaultActive = {
    about: false,
    charity: false,
    shop: false,
    contact: false,
    gallery: false
  }

  const [active, setActive] = useState(defaultActive)
  const [clicked, setClicked] = useState(null)


  function handleExit(id) {
    setActive({...active, [id]: false})
  }

  function handleActive(id) {
    if (id === "title") {
      if (active === defaultActive) {
        alert("Click here to close all tabs")
      } else {
        setActive(defaultActive)
      }
    }
    if (active[id] === false)
      setActive({...active, [id]: true})
      setClicked(id)
  }


  const boards = data.map(board => {
    return (
      <div
        id={board.id}
        onClick={(e) => {
          handleActive(board.id)
        }}
        key={board.id + "-div-key"}
      >
        <Board
        background={board.color}
        title={board.title}
        id={board.id}
        link={board.link}
        color={board.text}
        key={board.id + "key"}
        active={active[board.id]}
        handleExit={handleExit}
        clicked={clicked}
        />
      </div>
    )
  })

  return (
    <div>
      {boards}
      {/* <button
        onClick={handleCloseAll}
        >Test</button> */}
    </div>
  )
}
