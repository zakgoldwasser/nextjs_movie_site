import React, { useState } from 'react'
import Header from '../../components/Header'
import MovieMain from '../../components/MovieMain'
import CastMember from '../../components/CastMember'


export default function MoviePage({movie,cast}) {
  if (!movie.profile_path && !movie.backdrop_path && !cast) return (
    <>
    <Header/>
    <div className='flex justify-center'>
    <div className='w-1/2 mt-10 justify-center'>
        <h1 className='font-bold text-2xl text-center'>The TMDB API doesn&apos;t have enough info to display this movie.</h1>
        <p className='text-center'>Please return Home to select another movie.</p>
        </div>
    </div>
    </>
  )
  const BASE_URL ="https://image.tmdb.org/t/p/original/"
  const image_src = `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
      `${BASE_URL}${movie.poster_path}`
  const url_string = image_src.toString()
  return (
    <>
    <Header/>
      <MovieMain movie={movie} url_string={url_string}/>
    <div className='w-full relative'>
      <h1 className='px-10 text-4xl font-bold text-white'>Cast</h1>
      <div className='p-5 sm:grid md:grid-cols-3 lg:grid-cols-5 3xl:flex flex-wrap justify-center'>
      {cast?.map((castmember,i) =>(
          <CastMember key={i} castmember={castmember} BASE_URL={BASE_URL}/>
        ))}
      </div>
      <div className='fixed w-full h-full top-20 -z-50'>
      <div className='animate-blob -z-50 w-96 h-96 
                      absolute top-0 left-60 bg-purple-600 
                      rounded-full filter blur-xl mix-blend-screen opacity-20'></div>
      <div className='animate-blob -z-50 w-96 h-96 
                      absolute top-0 right-60 bg-blue-600 
                      rounded-full filter blur-xl mix-blend-screen animation-delay-4000 opacity-20'></div>
      <div className='animate-blob -z-50 w-96 h-96 
                      absolute top-40 left-96 bg-pink-600 
                      rounded-full filter blur-xl mix-blend-screen animation-delay-2000 opacity-20'></div>
      </div>
    </div>
    </>
  )
}

const API_KEY = process.env.API_KEY
export async function getServerSideProps(context){
  const movie_id = context.query.id.toString()

  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
  ).then((res) => res.json())

  const cast = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
  ).then((res) => res.json()).then((res) => res.cast)
  
  return{
    props: {
      movie: movie,
      cast: cast? cast:null
    }}
  
}


