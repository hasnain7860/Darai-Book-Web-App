import React from 'react'
import NetOnImg from '../assets/NetOn.png'
import BookImg from '../assets/book.jpeg'
import SharaImg from '../assets/shara.jpeg'
import Darja1 from '../assets/darja1.jpg'
import DarjaShara1 from '../assets/darja1shara.jpg'
import Darja2 from '../assets/darja2.jpg'
import DarjaShara2 from '../assets/darja2shara.jpg'
import Darja3 from '../assets/darja3.jpg'
import DarjaShara3 from '../assets/darja3shara.jpg'
import Darja4 from '../assets/darja4.jpg'
import DarjaShara4 from '../assets/darja4shara.jpg'
import Darja5 from '../assets/darja5.jpg'
import DarjaShara5 from '../assets/darja5shara.jpg'
import Darja6 from '../assets/darja6.jpg'
import DarjaShara6 from '../assets/darja6shara.jpg'
import Darja7 from '../assets/darja7.jpg'
import DarjaShara7 from '../assets/darja7shara.jpg'
import Darja8 from '../assets/darja8.jpg'
import DarjaShara8 from '../assets/darja8shara.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  
    const images = [
    { "firstImage" : Darja1, "secondImage": DarjaShara1 },
    { "firstImage": Darja2, "secondImage": DarjaShara2 },
    { "firstImage": Darja3, "secondImage": DarjaShara3 },
    { "firstImage": Darja4, "secondImage": DarjaShara4 },
    { "firstImage": Darja5, "secondImage": DarjaShara5 },
    { "firstImage": Darja6, "secondImage": DarjaShara6 },
    { "firstImage": Darja7, "secondImage": DarjaShara7 },
    { "firstImage": Darja8, "secondImage": DarjaShara8 }
]
  
  return (
    <>
    <div className="flex justify-center items-center flex-col" >
  <div className="w-[100vw] " >
    <img className="w-[95%]" src={NetOnImg} />
    </div>
        <div className="flex w-[100vw]" >
    <div className="w-[50%] mx-4" >
    <img src={SharaImg}  />
    </div>
    <div className="w-[50%] mx-4" >
    <img src={BookImg}  />
    </div>
    </div>
{images.map((pair, i) => (
                <div key={i} className="w-[100vw] flex justify-center items-center">
                <Link  to={"darjaShara" + (i+1)} >
                    <div className=" basis-1/2 mx-auto my-2 ">
                        <img className="w-[100%]" src={pair.firstImage} alt={`Image ${i * 2 + 1}`} />
                    </div>
                    </Link>
                    <Link to={"darja" + (i+1)} >
                    <div className="basis-1/2 mx-auto my-2">
                        <img className="w-[100%]"  src={pair.secondImage} alt={`Image ${i * 2 + 2}`} />
                    </div>
                    </Link>
                </div>
            )) }
    </div>
    </>
  )
}

export default Home