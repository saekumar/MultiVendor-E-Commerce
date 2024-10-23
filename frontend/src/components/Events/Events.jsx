import styles from '@/styles/styles'
import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className="">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className="">Popular Events</h1>
        </div>
        <div className="">
          <EventCard />
        </div>
      </div>
    </div>
  )
}

export default Events
