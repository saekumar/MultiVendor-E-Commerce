import EventCard from '@/components/Events/EventCard'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import React from 'react'

const Eventpage = () => {
  return (
    <div className="">
      <Header activeHeading={4} />
      <EventCard />

      <Footer />
    </div>
  )
}

export default Eventpage
