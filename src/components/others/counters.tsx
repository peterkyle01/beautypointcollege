'use client'
import { useState } from 'react'
import CountUp from 'react-countup'
import { Waypoint } from 'react-waypoint'

export default function Counters() {
  const [isInView, setIsInView] = useState(false)

  return (
    <>
      <Waypoint onEnter={() => setIsInView(true)} onLeave={() => setIsInView(false)} />
      <div className="grid grid-cols-4 py-10 place-items-center h-full w-full gap-2 px-2">
        <div className="flex h-full w-full rounded-lg flex-col items-center justify-center border-2 border-primary p-2 md:h-48 md:w-48">
          <p className="font-serif text-xl font-black  md:text-5xl">
            <CountUp end={isInView ? 1280 : 0} duration={2} />
          </p>
          <p className="text-center text-sm font-bold italic text-sky-500 md:text-base">
            Happy Students
          </p>
        </div>
        <div className="flex h-full w-full rounded-lg flex-col items-center justify-center border-2 border-primary p-2 md:h-48 md:w-48">
          <p className="font-serif text-xl font-black  md:text-5xl">
            <CountUp end={isInView ? 9 : 0} duration={2} />
          </p>
          <p className="text-center text-sm  font-bold italic text-sky-500  md:text-base">
            Approved Courses
          </p>
        </div>
        <div className="flex h-full w-full rounded-lg flex-col items-center justify-center border-2 border-primary p-2 md:h-48 md:w-48">
          <p className="font-serif text-xl font-black  md:text-5xl">
            <CountUp end={isInView ? 20 : 0} duration={2} />
          </p>
          <p className="text-center text-sm  font-bold italic text-sky-500  md:text-base">
            Certified Teachers
          </p>
        </div>
        <div className="flex h-full w-full rounded-lg flex-col items-center justify-center border-2 border-primary p-2 md:h-48 md:w-48">
          <p className="font-serif text-xl font-black  md:text-5xl">
            <CountUp end={isInView ? 1200 : 0} duration={2} />
          </p>
          <p className="text-center text-sm  font-bold italic text-sky-500  md:text-base">
            Graduate Students
          </p>
        </div>
      </div>
    </>
  )
}
