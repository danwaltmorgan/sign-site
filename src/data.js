import React from 'react'

import About from './pages/About'
import Charity from './pages/Charity'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'

export default [
  {color: "orange", title: "Title", route: "/", link: null},
  {color: "yellow", title: "About", route: "/about", link: <About />},
  {color: "blue", title: "Charity", route: "/charity", link: <Charity />},
  {color: "white", title: "Shop", route: "/shop", link: <Shop />},
  {color: "pink", title: "Contact", route: "/contact", link: <Contact />},
  {color: "aqua", title: "Gallery", route: "/gallery", link: <Gallery />}
]
