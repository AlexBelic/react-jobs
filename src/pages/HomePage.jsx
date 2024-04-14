import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import AllJobs from '../components/AllJobs'

function HomePage() {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
        <AllJobs />
    </>
  )
}

export default HomePage