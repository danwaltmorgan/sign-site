import React, { useEffect } from 'react'
import Exit from './Exit'

export default function Board(props) {

  useEffect(() => {
    if (!props.active) {
      handleMin()
    }
  })

  function handleMin() {
    if (props.id === "title") return
    console.log("min")
    let page = document.getElementById(props.title + "page")
    let board = document.getElementById(props.title)
    page.style.height = "0"
    page.style.display = "none"
    page.style.opacity = "0"
    page.style.visibility = "none"
    board.style.height = "15vh"
  }

  function handleClick(e) {
    if (props.title === "Title" || props.active) return

    let page = document.getElementById(props.title + "page")
    let board = document.getElementById(props.title)
    let margin = 70;

    page.style.display = "block"
    page.style.height = "auto" // allows for defining the page height
    let pageHeight = page.offsetHeight
    let boardHeight = board.offsetHeight

    board.style.height = pageHeight + boardHeight + margin + "px"
    setTimeout(() => {
      page.style.visibility = "visible"
      page.style.opacity = "1";
    }, 300)
  }


  return (
    <div
      className="board"
      id={props.title}
      style={{background: `${props.background}`}}
    >
      <div
        onClick={() => props.handleExit(props.id)}
        >
        <Exit
          active={props.active}
          id={props.id + "exit"}
          color={props.color}
        />
      </div>
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
