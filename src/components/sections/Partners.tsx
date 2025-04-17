"use client"
import Image from 'next/image'

export default function Partners() {
  const partners = [
    { name: "Stripe", path: "/partners/stripe.svg", width: 100 },
    { name: "Mastercard", path: "/partners/mastercard.svg", width: 60 },
    { name: "PayPal", path: "/partners/paypal.svg", width: 140 },
    { name: "Google", path: "/partners/google.svg", width: 140 },
    { name: "American Express", path: "/partners/amex.svg", width: 65 },
  ]
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-10">
          Meet Our Esteemed Partners & Affiliates
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src={partner.path}
                alt={partner.name}
                width={partner.width}
                height={40}
                className="object-contain h-12 cursor-pointer"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 