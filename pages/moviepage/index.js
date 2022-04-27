import React from 'react'
import Header from '../../components/Header'

export default function MoviePage(context) {
  return (
    <div>
      <Header/>
    <div>MoviePage</div>
    </div>
  )
}

export async function getServerSideProps(context){
  const movie_id = context.params
  
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/343611?api_key=3b5010f5f6bbe48722ba16651e790fd7`
  ).then((res) => res.json())

  return{
    props: {
      results: request.results
    }}
  
}


