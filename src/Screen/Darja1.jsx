import React from 'react'
import BookShowingLayout from '../Component/BookShowingLayout.jsx'
import Book63 from '../assets/book63.png'
import Book64 from '../assets/book64.png'
const Darja1 = () => {
  const DataDarja1 = [
    {
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/darsibook-80dce.appspot.com/o/book13.jpg?alt=media&token=5aaf2bd0-53ae-4887-b66a-70d6ad532ec1",
      "ReadingLink" : "ghhh",
      "DownloadLink" : "gjiiyfkkg"
    },    {
      "imageUrl": Book64,
      "ReadingLink" : "ghhh",
      "DownloadLink" : "gjiiyfkkg"
    },
        {
      "imageUrl": Book63,
      "ReadingLink" : "ghhh",
      "DownloadLink" : "gjiiyfkkg"
    },    {
      "imageUrl": Book64,
      "ReadingLink" : "ghhh",
      "DownloadLink" : "gjiiyfkkg"
    }
    ]
  return (
    <>
  {
    DataDarja1.map((data, i) => (
          <BookShowingLayout ImgUrl={data.imageUrl} ReadingLink={data.ReadingLink} DownloadLink={data.DownloadLink} />
    
      ))
  }
    </>
  )
}

export default Darja1