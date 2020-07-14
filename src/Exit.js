import React, { useEffect } from 'react'
import './exit.css'


export default function Exit(props) {


  useEffect(() => {
    if (props.active && props.id !== "titleexit") {
      const crosses = document.querySelectorAll(`.${props.id}cross`)
      const container = document.querySelector(`#${props.id}container`)

      container.style.height = "40px"

      setTimeout(() => {
        crosses.forEach(cross => {
          cross.style.width = "100%"
        })

      }, 100)

      setTimeout(() => {
        const left = document.querySelector(`#${props.id}left`)
        const right = document.querySelector(`#${props.id}right`)
        left.style.transform = "rotate(45deg)"
        right.style.transform = "rotate(-45deg)"
      }, 700)
    }
    if (!props.active) {
      const container = document.querySelector(`.${props.id}container`)
      const crosses = document.querySelectorAll(`.${props.id}cross`)
      const left = document.querySelector(`#${props.id}left`)
      const right = document.querySelector(`#${props.id}right`)
      left.style.transform = "rotate(-720deg)"
      right.style.transform = "rotate(-720deg)"

      setTimeout(() => {
        crosses.forEach(cross => {
          cross.style.width = "0"
        })
        container.style.height = "0"
      }, 100)
    }
  })


  return (
      <div
        className={props.id + "container container"}
        id={props.id + "container"}
        onClick={props.onExit}
        >
        <div
          className={props.id + "cross cross"}
          style={{"background": props.color}}
          id={props.id + "left"}>
        </div>
        <div
          className={props.id + "cross cross"}
          style={{"background": props.color}}
          id={props.id + "right"}>
        </div>
    </div>
  )
}
