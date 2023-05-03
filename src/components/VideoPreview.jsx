import React from 'react'
import LogoMakerVideo from '../../src/videos/video1.mp4'
import QuizeAppVideo from '../../src/videos/quize_app.mp4'
import ShoppingListVideo from '../../src/videos/shoppingList_app.mp4'
import MealAppVideo from '../../src/videos/meal_app.mp4'
import NativeFeatureVideo from '../../src/videos/native_feature.mp4'


import ReactPlayer from 'react-player'
export const VideoLogoMaker = () => {
  return (
    <ReactPlayer width={300} playing controls url={LogoMakerVideo} />
  )
}
export const VideoQuizApp = () => {
  return (
    <ReactPlayer width={300} playing controls url={QuizeAppVideo} />
  )
}

export const VideoShoppingList = () => {
  return (
    <ReactPlayer width={300} playing controls url={ShoppingListVideo} />
  )
}

export const VideoMealApp = () => {
  return (
    <ReactPlayer width={300} playing controls url={MealAppVideo} />
  )
}

export const NativeFeatureApp = () => {
  return (
    <ReactPlayer width={300} playing controls url={NativeFeatureVideo} />
  )
}
