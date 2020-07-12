import React, { useState, useEffect } from 'react'

const container = {
  // background: "grey",
  display: "none",
  position: "relative",
  width: "40px",
  height: "7px",
  // display: "flex",
  alignItems: "center",
  top: "30px",
  left: "95%",
  transition: "all 1s"
}
const cross = {
  // display: "none",
  position: "absolute",
  width: "0",
  height: "100%",
  background: "black",
  transition: "all 1s",
}

export default function Exit(props) {

  // const [active, setActive] = useState(true)

  useEffect(() => {
    // setActive(props.active)
    if (props.active && props.id !== "titleexit") {
      const crosses = document.querySelectorAll(`.${props.id}cross`)
      const container = document.querySelector(`.${props.id}container`)

      container.style.display = "flex"

      setTimeout(() => {
        crosses.forEach(cross => {
          // cross.style.display = "block"
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
  })


  return (
      <div style={container} className={props.id + "container"}>
        <div
          className={props.id + "cross"}
          style={cross}
          id={props.id + "left"}>
        </div>
        <div
          className={props.id + "cross"}
          style={cross}
          id={props.id + "right"}>
        </div>
    </div>
  )
}
