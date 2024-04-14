import React from 'react'
import ReadImg from '../assets/read.jpg'
import DownloadImg from '../assets/download.jpg'
import { Link } from 'react-router-dom'
const BookShowingLayout = ({ImgUrl,ReadingLink,DownloadLink}) => {
  return (
    <div className="flex justify-center items-center flex-col px-[5%] m-2">
    <div className="w-[100%] h-[500px]">
    <img className="h-[100%] object-cover w-[100%]" src={ImgUrl} />
    </div>
    <a href={ReadingLink} >
    <img className="my-1" src={ReadImg} />
    </a>
        <a href={DownloadLink} >
    <img  src={DownloadImg} />
    </a>
    </div>
  )
}

export default BookShowingLayout