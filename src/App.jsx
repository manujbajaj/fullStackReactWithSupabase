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
import { Heart } from 'lucide-react'
import ProtectedRoute from './components/protected-route'

function App() {


  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen px-14 container'>
        <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/onboarding' element={<ProtectedRoute><Onboarding/></ProtectedRoute>}/>
          <Route path='/jobs' element={<ProtectedRoute><JobListing/></ProtectedRoute>}/>
          <Route path='/my-jobs' element={<ProtectedRoute><MyJobs/></ProtectedRoute>}/>
          <Route path='/saved-jobs' element={<ProtectedRoute><SaveJobs/></ProtectedRoute>}/>
          <Route path='/post-job' element={<ProtectedRoute><PostJob/></ProtectedRoute>}/>
          <Route path='/job/:id' element={<ProtectedRoute><JobPage/></ProtectedRoute>}/>
        </Routes>
      </main>   
      <div className='p-10 text-center  bg-gray-800 mt-10'>Made with <span className='flex justify-center'><Heart color='red' fill='red'/></span> by Manuj </div>     
 
    </div>
  )
}

export default App
