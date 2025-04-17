"use client"
import React from 'react'

interface StatItem {
  value: string
  label: string
  superscript?: string
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      value: "524",
      superscript: "M",
      label: "Users Downloaded"
    },
    {
      value: "124",
      superscript: "+",
      label: "Countries"
    },
    {
      value: "184",
      superscript: "M",
      label: "Customer Reviews"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#d6f871] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex-1 min-w-[180px]">
              <div className="flex items-center justify-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  {stat.value}
                </span>
                {stat.superscript && (
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 ml-1">
                    {stat.superscript}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="container mx-auto px-4 pt-12 pb-4">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted By Ecommerce Partners & Affiliates</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Partner logos here */}
        </div>
      </div>
    </section>
  )
}
