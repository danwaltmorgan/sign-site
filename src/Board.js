import React, { useEffect } from 'react'
import Exit from './Exit'


export default function Board(props) {


  useEffect(() => {
    if (!props.active) {
      handleMin()
    }
    if (props.active && props.clicked === props.id) {
      handleMax()
    }
  })


  function handleMin() {
    if (props.id === "title") {
      return
    }
    let page = document.getElementById(props.title + "page")
    let board = document.getElementById(props.title)

    page.style.height = "0"
    page.style.display = "none"
    page.style.opacity = "0"
    page.style.visibility = "none"
    board.style.height = "15vh"
    setTimeout(() => {
      board.classList.add("board-active")
    }, 500)
  }

  function handleMax() {
    let page = document.getElementById(props.title + "page")
    let board = document.getElementById(props.title)
    let margin = 70;

    board.classList.remove("board-active")


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
      // onMouseOver={(e) => handleHover(e)}
    >
        <Exit
          active={props.active}
          id={props.id + "exit"}
          color={props.color}
          handleExit={() => props.handleExit(props.id)}
        />
      <h1
        style={{"color": props.color}}
        className="title"
        >{props.title}</h1>
      <div
        style={{"color": props.color}}
        className="page"
        id={props.title + "page"}
        >{props.link}</div>
    </div>
  )
}
