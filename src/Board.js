import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

export default function Board(props) {



  return (
    <div
      className="board"
      id={props.id}
      style={{background: `${props.background}`}}
    >
      <Router>
        <div>
          <div class="link-div">
            <Link
              to={props.route}
              className="link"
              >{props.title}</Link>
          </div>
            <Route path={props.route}>
              {props.link}
            </Route>
        </div>
      </Router>
    </div>
  )
}
