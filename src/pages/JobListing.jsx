import { getCompanies } from '@/api/apiCompanies'
import { getJobs } from '@/api/apiJobs'
import JobCard from '@/components/job-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import useFetch from '@/hooks/use-fetch'
import { useSession, useUser } from '@clerk/clerk-react'
import { State } from 'country-state-city'
import { useEffect } from 'react'
import { useState } from 'react'
import { BarLoader } from 'react-spinners'

const JobListing = () => {

  const {isLoaded}=useUser()
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [company_id, setCompany_id] = useState("")

  const {fn:fnJobs,data:jobs,loading:loadingJobs}= useFetch(getJobs,{location,company_id,searchQuery})

  const {fn:fnCompanies,data:companies}= useFetch(getCompanies)
  


  const clearFilters=()=>{
     setSearchQuery("")
     setLocation("")
     setCompany_id("")
  }
  
  
  // console.log(dataJobs);
  
    useEffect(()=>{
      if(isLoaded) fnCompanies();
      
    },[isLoaded])
  
  useEffect(()=>{
  
    
    if(isLoaded) fnJobs({ location, company_id, searchQuery });
    
  },[isLoaded,location,company_id,searchQuery])
  if(!isLoaded){
    return(
      <BarLoader className='mb-4' color='#36d7b7' width={"100%"}/>
    )
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get("search-query")
    
    
    setSearchQuery(query || "")
  }


  return <div>
    <h1 className='gradient-title font-extrabold text-6xl sm:text-7xl'>Latest Jobs</h1>

    {/* Add filters here */}
    <form className='mt-4 h-14 flex items-center justify-center gap-2.5' onSubmit={handleSearch}>
      <Input type="text" placeholder="search jobs by title..." name="search-query" className={"h-full flex-5 px-4 text-md"}/>

      <Button type="submit" className={"h-full flex-1 sm:w-28 font-bold text-xl"} variant='blue'>Search</Button>
    </form>
    <br />
    <div className='flex flex-col sm:flex-row gap-2 '>
      
      <Select value={location}   onValueChange={(value)=>{setLocation(value)}}>
        <SelectTrigger className="sm:w-1/3 w-full">
          <SelectValue placeholder="Filter By Location" />
        </SelectTrigger>
        <SelectContent>
          {State.getStatesOfCountry("IN").map(({name})=>{
            return <SelectItem key={name} value={name}>{name}</SelectItem>
          })}
        </SelectContent>
      </Select>

      <Select value={company_id}  onValueChange={(value)=>{setCompany_id(value)}}>
        <SelectTrigger className="sm:w-1/3 w-full">
          <SelectValue placeholder="Filter By Companies" />
        </SelectTrigger>
        <SelectContent >
          {companies?.map(({name,id})=>(
            <SelectItem key={name} value={id}>{name}</SelectItem>)
          )}
        </SelectContent>
      </Select>

      <Button onClick={clearFilters } variant='destructive' className={"sm:w-1/3"}>
          Clear Filters
      </Button>
    </div>


    {loadingJobs &&(
        <BarLoader className='mt-4' color='#36d7b7' width={"100%"}/>
    )}

    {loadingJobs===false&&(
      <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {jobs?.length?(
          jobs.map((job)=>{
            return <JobCard key={job.id} job={job}
            savedInit={job?.saved?.length>0}/>
          })
        ):(
          <div>No Jobs Found :(</div>
        )}
      </div>
    )}
  </div>
}

export default JobListing
 