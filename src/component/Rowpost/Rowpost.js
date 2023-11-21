import React, { useEffect, useState, } from 'react'
import './Rowpost.css'
import axios from '../../Axios'
import Youtube from 'react-youtube'
import {imgageUrl,API_KEY} from '../../constansts/Constant'
function Rowpost(props) {
  const [movies, setmovies]=useState([])
  const [Urlid, seturlid] = useState('')
  useEffect(() => {
  axios.get(props.url).then(Response=>{
    console.log(Response.data.results)
    setmovies(Response.data.results)
  }).catch(err=>{
    alert('api eroorr')
  })
  }, )
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlemovie = (id)=>{
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
if(Response.data.results.length!==0){
  seturlid(Response.data.results[0])
}else{
  console.log('trailer not available')
}

})
  }
  return (
    <div className='row' >
      <h2>{props.title} </h2>
      <div className='posters'>
        {movies.map((obj)=>
      <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter': 'poster'} src={`${imgageUrl+obj.backdrop_path}`} alt="poster" />
        )}

        
        
       
        
      </div>
       {Urlid &&  <Youtube  opts={opts} videoId={Urlid.key} /> }
    </div>
  )
}

export default Rowpost
