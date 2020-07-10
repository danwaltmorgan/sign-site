import React from 'react'

export default function Board(props) {

  function handleClick(e) {
    if (props.title === "Title") return
    let page = document.getElementById(props.title + "page")
    let board = document.getElementById(props.title)

    page.style.height = "auto"
    let pageHeight = page.offsetHeight
    let boardHeight = board.offsetHeight

    board.style.height = pageHeight + boardHeight + 30 + "px"
    // console.log(height)
    setInterval(() => {
      page.style.visibility = "visible"
      page.style.opacity = "1";
    }, 300)
  }

  function handleExit(e) {
    e.target.style.display = "none"
  }

  return (
    <div
      className="board"
      id={props.title}
      style={{background: `${props.background}`}}
    >
      <h1
        style={{"color": props.color}}
        className="title"
        onClick={(e) => handleClick(e)}
        >{props.title}</h1>
      <div
        style={{"color": props.color}}
        className="page"
        id={props.title + "page"}
        >{props.link}</div>
    </div>
  )
}
