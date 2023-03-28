import React from 'react'
import Video1 from '../../src/videos/video1.mp4'

import ReactPlayer from 'react-player'
export const VideoPreviewOne = () => {
  return (
    <ReactPlayer playing controls url={Video1} />
  )
}
