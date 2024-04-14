import React from 'react'
import NetOnImg from '../assets/NetOn.png'
import FrontBookImg from '../assets/front.png'
import MainHeadingImg from '../assets/text.png'
import KotoboBtnImg from '../assets/KotobDarsi.jpg'
import { Link } from 'react-router-dom'
const MainScreen = () => {
  return (
    <>
<div className="flex justify-center items-center flex-col  ">
  <div className="w-[100vw] " >
    <img className="w-[95%] " src={NetOnImg} />
    </div>
     <div className="w-[100vw] " >
    <img className="w-[95%] " src={FrontBookImg} />
    </div>
         <div className="w-[100vw] " >
    <img className="w-[95%] "  src={MainHeadingImg} />
    </div>
    <Link to="/home" >
         <div className="w-[100vw] " >
    <img className="w-[95%] " src={KotoboBtnImg} />
</div>
</Link>
    <button className="px-20 py-3 bg-lime-400 text-white font-extrabold">How to Use</button>
    <h1>اپلیکیشن کے اپڈیٹ کے لیے ان گروپ میں شمولیت کرلیے</h1>
    </div>
    </>
  )
}

export default MainScreen