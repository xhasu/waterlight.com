import React from 'react'

const Video = () => {

  return (
    <div className="video">
      <div className="embed16by9">
        <iframe width="1080" height="608" src="https://www.youtube.com/embed/GwmMKTeWS3I?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      {/* <img src="https://images.unsplash.com/photo-1617004302666-b2b58ec33e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/> */}
      {/* 
      <video preload="metadata" controls={true} controlsList="nodownload" playsInline="playsinline" poster="https://images.unsplash.com/photo-1617004302666-b2b58ec33e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920">
        <source src="/media/waterlight.mp4" type="video/mp4"/>
        <img src="https://images.unsplash.com/photo-1617004302666-b2b58ec33e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt="waterlight poster" width="1920" height="1080" />
      </video>
      */}
    </div>
  )
}

export default Video
