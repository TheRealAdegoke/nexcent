import React from 'react'
import Logo1 from '../../assets/Logo (1).png'
import Logo2 from '../../assets/Logo (2).png'
import Logo3 from '../../assets/Logo (3).png'
import Logo4 from '../../assets/Logo (4).png'
import Logo5 from '../../assets/Logo (5).png'
import Logo6 from '../../assets/Logo (6).png'
import Logo7 from '../../assets/Logo (7).png'

const ClientComponent = () => {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7]
  return (
    <section className='py-20'>
      <div className='text-center text-secondary'>
        <h2 className='text-3xl font-medium'>Our Clients</h2>
        <p className='text-secondary my-4'>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className='grid grid-cols-7 max-lg:grid-cols-4 justify-items-center max-lg:gap-x-10 mt-10'>
        {logos.map((logo, index) => (
          <img src={logo} alt={`logo-${index}`} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ClientComponent