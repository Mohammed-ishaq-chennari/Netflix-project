import React, { useEffect, useState } from 'react'
import {API_KEY,imgageUrl} from '../../constansts/Constant'
import './Banner.css'
import axios from '../../Axios'
function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
    console.log(Response.data.results[0])
    setmovie(Response.data.results[0])
  })
  }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imgageUrl+ movie.backdrop_path : ''})`}}
     className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : '' }</h1>
        <div className='banner_buttons'>
          <button className='button'>play</button>
              <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview : ''} </h1>
      </div>
      <div className='fade_bottom'> </div>
      
      
    </div>
  )
}

export default Banner
