import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './Nav'
import Hnl from './Hnl'
import GC from './GalacticCrusade'
import TN from './Tn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Nav/>
  <Hnl/>
    <TN/>
    <GC/> 
  </React.StrictMode>,
)
