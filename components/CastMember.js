import React, {useState} from 'react'
import Image from 'next/image'

export default function CastMember({castmember,BASE_URL}) {
  if (!castmember.profile_path) return null
  const image_src = `${BASE_URL}${castmember.profile_path}`

  return (
    <>
    <div style={{height:'auto'}} className='mx-5 mb-10 display:inline-block relative group rounded overflow-hidden'>
        <div className='p-5 absolute bottom-0 z-50 opacity-0 group-hover:opacity-100'>
              <h3><span className='font-bold text-lg'>{castmember.name}</span> as</h3>
              <h4 className='font-semibold'>{castmember.character}</h4>
        </div>
        <div className='bg-gradient-to-t from-[#131313] h-full w-full absolute z-10 opacity-0 group-hover:opacity-75'></div>
        <Image className='-z-10' layout="responsive" src={image_src} height={600} width={400}/>
    </div> 
  </>
  )
}