import React, { useState } from 'react'
import Exit from './Exit'

export default function Board(props) {

  function handleClick(e) {
    if (props.title === "Title" || props.active) return


    let page = document.getElementById(props.title + "page")
    let board = document.getElementById(props.title)
    // let exit = document.querySelector(`.${props.id}container`)
    let margin = 70;

    page.style.display = "block"
    page.style.height = "auto" // allows for defining the page height
    let pageHeight = page.offsetHeight
    let boardHeight = board.offsetHeight
    // let exitHeight = exit.offsetHeight

    board.style.height = pageHeight + boardHeight + margin + "px"
    // console.log(height)
    setInterval(() => {
      page.style.visibility = "visible"
      page.style.opacity = "1";
    }, 300)
  }

  function handleExit() {
    // console.log(props.id)
    props.onExit(props.id)
  }


  return (
    <div
      className="board"
      id={props.title}
      style={{background: `${props.background}`}}
      // onClick={props.onExit}
    >
      <div
        onClick={handleExit}
        >
        <Exit
          active={props.active}
          id={props.id + "exit"}
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
