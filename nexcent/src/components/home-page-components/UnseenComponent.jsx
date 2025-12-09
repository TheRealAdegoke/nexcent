import React from 'react'
import SignUpComponent from '../layouts/SignUpComponent'
import frame35 from "../../assets/Frame 35.png"

const UnseenComponent = () => {
  return (
    <section className="bg-white pt-20">
      <div className="flex flex-row-reverse items-center justify-evenly max-lg:flex-col py-5 max-lg:px-5 gap-y-10">
        <div className='lg:w-[50%]'>
          <h1 className="text-5xl text-secondary font-medium leading-14">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-secondary my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <SignUpComponent layoutDisplay="inline-block" text="Learn More" />
        </div>

        <div className=''>
          <img src={frame35} alt="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default UnseenComponent