import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const LandingPage = () => {
  return (
    
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col justify-center items-center gradient-title text-4xl font-extrabold select-none lg:text-8xl sm:text-6xl tracking-tighter py-4'>Find Your Dream Job 
          
          <span className='flex items-center gap-2 sm:gap-6'>and get 
            
            <img src="/logo.png" className='h-14 sm:h-24 lg:h-32' alt="" /></span></h1>

            <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
              Explore Thousand of job listings or find the perfect candidate
            </p>

      </section>
      <div className='flex gap-6 justify-center'>
        <Link to='/jobs'>
            <Button variant='blue' size='xl' className='cursor-pointer'>Find Jobs</Button>
        </Link>
        <Link to='/post-job'>
            <Button variant='destructive' size='xl' className='cursor-pointer'>post Jobs</Button>
        </Link>

      </div>
        {/* caraousel */}

      {/* banner */}

      <section>
        {/* cards */}
      </section>

      {/* Accordian */}
    </main>
  )
}

export default LandingPage