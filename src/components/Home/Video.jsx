import React from 'react'
import bgVideo from "../../assets/bg-video.mp4"

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay loop muted src={bgVideo} className='h-full w-full object-cover'/>
    </div>
  )
}

export default Video