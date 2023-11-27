import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are revitalizing the security sector of Edo State' /> <br />
            <TitleLogo title='Making the change and paving the way!' />
          </div>
          <div>
            <button className='button-primary'>Book a Reservation</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
