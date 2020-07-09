import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

export default function Board(props) {

  function handleClick(e) {
    if (props.title === "Title") return

    let exit = document.getElementById(`exit${props.title}`)
    exit.style.display = "flex"

    // console.log(e.target.disabled)

  }

  function handleExit(e) {
    e.target.style.display = "none"
  }

  return (
    <div
      className="board"
      id={props.id}
      style={{background: `${props.background}`}}
    >
      <Router>
        <div>
          <div className="link-div">
            <Link
              to="/"
              className="exit-button"
              id={"exit" + props.title}
              onClick={e => handleExit(e)}
              >X</Link>
            <Link
              to={props.route}
              className="link"
              id={props.title}
              onClick={e => handleClick(e)}
              >{props.title}</Link>
          </div>
            <Route path="/">
              <div></div>
            </Route>
            <Route path={props.route}>
              {props.link}
            </Route>
        </div>
      </Router>
    </div>
  )
}
