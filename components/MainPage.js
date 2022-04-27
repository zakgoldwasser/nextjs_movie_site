import React from 'react'
import Nav from './Nav'
import Results from './Results'
import Header from './Header'

export default function MainPage(prop) {
  return (
    <div>
      <Header/>
      <Nav/>
      <Results results={prop.results}/>
    </div>
  )
}
