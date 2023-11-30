import React from "react"
import { Title, TitleLogo, TitleSm } from "./common/Title"
import { images } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <TitleLogo title='Unveiling the all new 24/7 Edo State Emergency Short Code' /> 
            <Image src={images.num} alt='739'  width={300}/>
            {/* <Image src={images.num2} alt='739' width={200} height={200} /> */}
          <Link href='https://ec3.netlify.app' className='title-link'>
            <TitleSm title='More Info' />
          </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
