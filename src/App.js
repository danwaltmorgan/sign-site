import React from 'react'
import Board from './Board'
import './index.css'
import data from './data' // contains styling information about the boards


export default function App() {

  const boards = data.map(board => {
    return (
      <Board
        background={board.color}
        title={board.title}
        link={board.link}
        route={board.route}
      />
    )
  })

  return (
    <div>
      {boards}
    </div>
  )
}
