import React from 'react'

import About from './pages/About'
import Charity from './pages/Charity'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'

export default [
  {color: "orange", text: "aqua", title: "Title", id: "title", link: null},
  {color: "yellow", text: "black", title: "About", id: "about", link: <About />},
  {color: "blue", text: "white", title: "Charity", id: "charity", link: <Charity />},
  {color: "white", text: "blue", title: "Shop", id: "shop", link: <Shop />},
  {color: "pink", text: "red", title: "Contact", id: "contact", link: <Contact />},
  {color: "aqua", text: "black", title: "Gallery", id: "gallery", link: <Gallery />}
]
