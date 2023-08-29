import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Footer} from './components/Footer/Footer.jsx'
import {Header} from './components/Header/Header.jsx'
import {Body} from './components/Body/Body.jsx'
import './App.css'

export function App() {

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

