'use client'

import { Button } from '../ui/button'
import { TypewriterEffectSmooth } from './typewriter-effect'

export function HeroTypewriter() {
  const words = [
    {
      text: 'Beauty',
    },
    {
      text: 'Point',
    },
    {
      text: 'College',
    },
  ]
  return (
    <div className="grid place-items-center place-content-center gap-4 md:place-content-evenly w-full h-full md:w-3/4 md:h-2/3 bg-black/60">
      <p className="text-white text-lg font-bold">Your Bright Future Is Our Mission!</p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button size={'lg'}>Read more...</Button>
      </div>
    </div>
  )
}
