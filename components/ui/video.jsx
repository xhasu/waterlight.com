import React from 'react'
import useTranslation from '../../hooks/useTranslation';

const Video = () => {

  const { t, locale } = useTranslation();

  const url = (locale == 'es' ? 'https://www.youtube.com/embed/ADgHMxuA8RA?rel=0' : 'https://www.youtube.com/embed/GwmMKTeWS3I?rel=0');

  return (
    <div className="video">
      <div className="embed16by9">
        <iframe width="1080" height="608" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Video
