import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import companies from '../data/companies.json'
import faqs from '../data/faq.json'
import Autoplay from 'embla-carousel-autoplay'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


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
        <Carousel
        plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
      
      className="w-full  py-10"
    >
      <CarouselContent className='gap-5  sm:gap-20 items-center flex'>
        {companies.map(({name,id,path})=>{
          return <CarouselItem className=' basis-1/3 lg:basis-1/6'  key={id}>
            <img className='h-9 select-none sm:h-14 object-contain' src={path} alt={name}/ >
          </CarouselItem>
        })}
      </CarouselContent>
    </Carousel>
      {/* banner */}

      <img src="/banner.jpeg" className='w-full' alt="" />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* cards */}
          <Card>
            <CardHeader>
              <CardTitle className='font-bold text-3xl'>For Job Seekers</CardTitle>

            </CardHeader>
            <CardContent>
              Search and apply for jobs, track applications, and more.
            </CardContent>
            
          </Card>
            
          <Card>
            <CardHeader>
              <CardTitle className='font-bold text-3xl'>For Employers</CardTitle>
        
            </CardHeader>
            <CardContent>
              <p>Post Jobs manage application and find best candidates</p>
            </CardContent>
            
          </Card>
      </section>

      {/* Accordian */}

      <Accordion type="single" collapsible>
        

          {faqs.map((faq,index)=>{
           
              return (<AccordionItem key={index} value={`item-${index+1}`}>
                <AccordionTrigger className='cursor-pointer'>{faq.question}</AccordionTrigger>
                <AccordionContent className='select-none' >
                  {faq.answer}
                </AccordionContent>
                </AccordionItem>)
            
          })}
          
        
      </Accordion>
    </main>
  )
}

export default LandingPage