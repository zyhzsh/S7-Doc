import React from 'react'
import LogoMaker from '../../src/videos/video1.mp4'
import QuizeApp from '../../src/videos/quize_app.mp4'


import ReactPlayer from 'react-player'
export const VideoLogoMaker = () => {
  return (
    <ReactPlayer width={300} playing controls url={LogoMaker} />
  )
}
export const VideoQuizApp = () => {
  return (
    <ReactPlayer width={300} playing controls url={QuizeApp} />
  )
}
