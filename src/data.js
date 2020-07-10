import React from 'react'

import About from './pages/About'
import Charity from './pages/Charity'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'

export default [
  {color: "orange", text: "aqua", title: "Title", route: "/", link: null},
  {color: "yellow", text: "black", title: "About", route: "/about", link: <About />},
  {color: "blue", text: "white", title: "Charity", route: "/charity", link: <Charity />},
  {color: "white", text: "blue", title: "Shop", route: "/shop", link: <Shop />},
  {color: "pink", text: "red", title: "Contact", route: "/contact", link: <Contact />},
  {color: "aqua", text: "black", title: "Gallery", route: "/gallery", link: <Gallery />}
]
