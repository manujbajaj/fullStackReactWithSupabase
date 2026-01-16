import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusinessIcon, Heart, PenBox } from 'lucide-react'
import { useState , useEffect } from 'react'

const Header = () => {

  const [showSignIn, setshowSignIn] = useState(false)

  const [search,setSearch]=useSearchParams();

  const {user}=useUser();

  

  useEffect(()=>{
    if(search.get("sign-in")){
      setshowSignIn(true);
    }
  },[search])

  const handleOverlayClick=(e)=>{
    if(e.target===e.currentTarget){
      setshowSignIn(false);
      setSearch()
    }
  }

  

  return (
    <div className=''>
      <nav className=' py-4 flex justify-between items-center'>
        <Link to='/'>
          <img src='/logo.png' className=' h-20'></img>
        </Link>

        <div className='flex gap-8'>

          <SignedOut>
            <Button variant='outline' onClick={() => setshowSignIn(true)}>Login</Button>
          </SignedOut>

          <SignedIn>
            {/* add consdition */}
            {user?.unsafeMetadata?.role==="recruiter"&&
            (<Link to='/post-job'  >
              <Button variant='destructive' className={`rounded-full  cursor-pointer`}>
                <PenBox size={20} className='mr-2' />
                Post a Job</Button>
            </Link>)}
            <UserButton
              appearance={
                {
                  elements:{
                    avatarBox:"w-10 h-20"
                  }
                }
              } 
            >

              <UserButton.MenuItems>
                <UserButton.Link
                  label='my-jobs'
                  href='/my-jobs'
                  labelIcon={<BriefcaseBusinessIcon size={15}/>}
                />
                <UserButton.Link
                  label='Saved jobs'
                  href='/saved-jobs'
                  labelIcon={<Heart size={15}/>}
                />
              </UserButton.MenuItems>

            </UserButton>
          </SignedIn>
        </div>
      </nav>

      
      {showSignIn && (
        <div className='flex inset-0 items-center  justify-center bg-black/50 fixed' onClick={handleOverlayClick}>
          <SignIn
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
            />
        </div>
          )
        }
      </div>
  )
}

export default Header