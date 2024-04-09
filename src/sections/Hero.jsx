import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import IconGroup from '../assets/icons/icons-group.png'
import Buttons from "../components/Buttons"
import AvatarFemale1 from '../assets/images/23.svg'
import AvatarImg from '../assets/images/18.svg'
import AvatarFemale2 from '../assets/images/6.svg'
import AvatarFemale4 from '../assets/images/30.svg'
import AvatarFemale5 from '../assets/images/35.svg'
import AvatarFemale6 from '../assets/images/63.svg'
import './Hero.css'

import { shoes, statistics } from "../constants"
import { useState } from "react"
import TheForm from "../components/form/TheForm.jsx";
import CustomReviews from "./CustomerReviews.jsx"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
      <>
         <section className="bg-hero-image bg-black h-[500px]" style={{backgroundImage: `url('https://shtab.navalny.com/images/hero-bg.svg')`}}>
            <p className="font-bold text-left pt-20 mb-32 pl-[20px] lg:mb-0 lg:padding text-white   text-[60px]">
               Дорога в <br /> <span className="text-blue-700">Европу</span>   
            </p>
            <div className=" ">
              <div className="avatar-scroll w-[1000px] overflow-hidden">
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />  
                     
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />  
                     
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />  
                     
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />  
                     
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />  
                     
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     <img className="w-[1000px]" src={IconGroup} alt="icon-group" />   
                     
            </div>
          </div>
         </section>
          <CustomReviews />
          
          <div className="text-4xl text-center font-bold">
          </div>

          
      </>
  )
}

export default Hero;
