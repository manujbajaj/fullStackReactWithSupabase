import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import MyJobs from './pages/my-jobs'
import SaveJobs from './pages/savedjob'
import PostJob from './pages/postJob'
import JobPage from './pages/Job'
import Header from './components/header'

function App() {


  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen px-10 container'>
        <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/onboarding' element={<Onboarding/>}/>
          <Route path='/jobs' element={<JobListing/>}/>
          <Route path='/my-jobs' element={<MyJobs/>}/>
          <Route path='/saved-job' element={<SaveJobs/>}/>
          <Route path='/post-job' element={<PostJob/>}/>
          <Route path='/job/:id' element={<JobPage/>}/>
        </Routes>
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>Made with Love by Manuj</div>
     
 
    </div>
  )
}

export default App
