"use client"
import { useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  position: string
  quote: string
  rating: number
  avatar: string
}

export default function Reviews() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Charlotte Anna",
      position: "Business Owner",
      quote: `Feature is top standard: reviews with images of clients or their logos, include short snippets like "Excellent experience", "Made my vision a reality", etc.`,
      rating: 5,
      avatar: "/charlotte.png"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      position: "Software Engineer",
      quote: "The AI-driven insights have completely transformed how I manage my finances. The app is intuitive and the support team is excellent.",
      rating: 5,
      avatar: "/marcus.png"
    },
    {
      id: 3,
      name: "Sophia Chen",
      position: "Digital Marketer",
      quote: "I've tried many financial apps, but this one stands out with its personalized recommendations and beautiful interface. Highly recommended!",
      rating: 5,
      avatar: "/sophia.png"
    }
  ]

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/world-map.png')] bg-no-repeat bg-center bg-contain"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column with testimonial content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Join 16M+ Users Managing Money Smarter With Us
            </h2>
            
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg text-gray-700 italic mb-8">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                    {/* Use a placeholder color if image isn't available */}
                    <div className="absolute inset-0 bg-lime-600 flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].position}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-lime-100 hover:text-lime-600 transition"
                    onClick={handlePrev}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-lime-100 hover:text-lime-600 transition"
                    onClick={handleNext}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="absolute bottom-0 right-0 z-10 w-full md:w-5/6">
                <div className="bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-tl-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-lime-600 flex items-center justify-center text-white font-bold text-xs">
                        CA
                      </div>
                      <span className="font-medium text-sm">Charlotte Anna</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600">107+</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((id) => (
                        <div key={id} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs text-white font-medium overflow-hidden">
                          {id}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">likes this post</span>
                  </div>
                </div>
              </div>
              
              {/* Professional woman image */}
              <div className="relative h-full">
                <div className="absolute inset-0 bg-lime-50 bg-opacity-30">
                  {/* This would be replaced with an actual image in production */}
                  <div className="absolute bottom-0 right-8 h-[90%] w-[60%] bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial count indicator */}
      <div className="container mx-auto px-4 mt-10">
        <div className="flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial ? 'bg-lime-500 w-6' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
