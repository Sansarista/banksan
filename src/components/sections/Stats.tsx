"use client"
import { useEffect, useState } from 'react'

export default function Stats() {
  const [animate, setAnimate] = useState(false)
  
  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <section className="py-16 bg-[#d6f871]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Users stat */}
          <div 
            className={`transform transition-all duration-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl font-light text-[#171717] tracking-tight relative pb-1">
                241
                <span className="text-xl text-[#171717] absolute top-0 -right-4">M</span>
              </span>
              <p className="text-[#171717] text-sm uppercase tracking-wider">Users Worldwide</p>
            </div>
          </div>
          
          {/* Countries stat */}
          <div 
            className={`transform transition-all duration-500 delay-100 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl font-light text-[#171717] tracking-tight">
                124
              </span>
              <p className="text-[#171717] text-sm uppercase tracking-wider">Countries</p>
            </div>
          </div>
          
          {/* Transactions stat */}
          <div 
            className={`transform transition-all duration-500 delay-200 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl font-light text-[#171717] tracking-tight relative pb-1">
                1.5
                <span className="text-xl text-[#171717] absolute top-0 -right-4">M</span>
              </span>
              <p className="text-[#171717] text-sm uppercase tracking-wider">Daily Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
