import React from 'react'
import SignUpComponent from '../layouts/SignUpComponent'
import heroImage from "../../assets/Illustration (1).png"

const HeroComponent = () => {
  return (
    <section className="bg-tertiary pt-20">
      <div className="flex items-center justify-evenly max-lg:flex-col py-5 max-lg:px-5 gap-y-10">
        <div>
          <h1 className="text-5xl text-secondary font-medium leading-14">
            Lessons and insights <br />{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-secondary my-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <SignUpComponent layoutDisplay="inline-block" text="Register" />
        </div>

        <div>
          <img src={heroImage} alt="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroComponent