import React from 'react'
import { Instagram, Dribbble, Twitter, Youtube, Send  } from "lucide-react";
import nextcent from "../../assets/footer-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-footer text-white flex justify-between max-lg:flex-col py-14 px-24 max-lg:px-4">
      <div className="space-y-5 max-lg:mb-10">
        <img src={nextcent} alt={nextcent} />
        <p>Copyright © 2020 Nexcent ltd.</p>
        <p>All rights reserved</p>
        <div className="flex gap-x-3">
          <div className="bg-socialBg p-2 rounded-full">
            <Instagram />
          </div>
          <div className="bg-socialBg p-2 rounded-full">
            <Dribbble />
          </div>
          <div className="bg-socialBg p-2 rounded-full">
            <Twitter />
          </div>
          <div className="bg-socialBg p-2 rounded-full">
            <Youtube />
          </div>
        </div>
      </div>

      <div className="w-[60%] flex gap-x-10 gap-y-8 justify-between max-lg:flex-col">
        <div>
          <h2 className="font-semibold text-2xl mb-5">Company</h2>
          <div className="flex flex-col gap-y-4 text-white/60">
            <Link to="/">About Us</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Testimonials</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-5">Support</h2>
          <div className="flex flex-col gap-y-4 text-white/60">
            <Link to="/">Help center</Link>
            <Link to="/">Terms of service</Link>
            <Link to="/">Legal</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Status</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-5">Stay up to date</h2>
          <div className='relative max-w-[250px]'>
            <input type="text" placeholder='Your email address' className='bg-socialBg pl-3 pr-10 py-2 rounded-lg min-w-[250px]'/>
            <Send className='absolute right-3 top-2'/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer