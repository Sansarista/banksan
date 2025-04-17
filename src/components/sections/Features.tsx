"use client"
import { useState } from 'react'
import Image from 'next/image'

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)
  
  const features: Feature[] = [
    {
      id: 1,
      title: "Sync your bank, wallet, or cards securely",
      description: "Create a custom card that reflects your unique style and/or personality. Choose from a range of colors, patterns, and designs to customize the look of your card.",
      icon: (
        <svg className="w-6 h-6 text-[#d6f871]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Get AI-driven insights to manage spending and grow wealth",
      description: "Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations to optimize your financial decisions.",
      icon: (
        <svg className="w-6 h-6 text-[#d6f871]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Effortless money transfers",
      description: "Send money instantly to friends and family, pay bills automatically, and manage your recurring payments in one place.",
      icon: (
        <svg className="w-6 h-6 text-[#d6f871]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  const cardData = [
    { id: "banking", color: "bg-green-100", iconColor: "text-green-600", amount: "$5789", title: "Checking A", subtitle: "Account", balance: "26%" },
    { id: "savings", color: "bg-blue-100", iconColor: "text-blue-600", amount: "$4000", title: "Savings", subtitle: "Account", balance: "8%" },
    { id: "grocery", color: "bg-pink-100", iconColor: "text-pink-600", amount: "$4,000", title: "Grocery", subtitle: "Expenses", balance: "12%" }
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-logo mb-6">Simple, Fast & Hassle-Free</h2>
          <p className="text-gray-600">
            We've combined accessibility and design features to deliver the best banking experience on the planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Feature tabs */}
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-white shadow-lg border-l-4 border-[#d6f871]' 
                      : 'hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeTab === index ? 'bg-[#d6f871]/20' : 'bg-gray-100'}`}>
                      {feature.icon}
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual representation */}
          <div className="relative">
            {activeTab === 0 && (
              <div className="bg-white p-8 rounded-2xl shadow-xl relative">
                <div className="absolute -top-12 -right-4 w-24 h-24 bg-[#d6f871]/20 rounded-full opacity-30"></div>
                <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-[#d6f871]/20 rounded-full opacity-30"></div>
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-[#d6f871] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-bold text-lg">Bankio</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Personal Balance</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500">Available</span>
                    <div className="text-lg font-bold">$7,829</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Card Number</div>
                    <div className="font-mono text-lg font-bold">5789 **** **** 286</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Balance</div>
                    <div className="font-bold text-lg">$1,500</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {cardData.map(card => (
                    <div key={card.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center ${card.iconColor}`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{card.title}</div>
                          <div className="text-xs text-gray-500">{card.subtitle}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{card.amount}</div>
                        <div className="text-xs text-green-600">+{card.balance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">Available credit</h3>
                      <p className="text-gray-500 text-sm">This month</p>
                    </div>
                    <div className="text-2xl font-bold">$259.75</div>
                  </div>
                  
                  <div className="w-full h-40 bg-gray-50 rounded-xl p-4 relative">
                    {/* Simplified chart representation */}
                    <div className="absolute bottom-4 left-4 right-4 h-24">
                      <div className="relative h-full">
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                          <div className="w-1/6 h-[40%] bg-gray-200 rounded-t-md mx-1"></div>
                          <div className="w-1/6 h-[60%] bg-gray-200 rounded-t-md mx-1"></div>
                          <div className="w-1/6 h-[30%] bg-gray-200 rounded-t-md mx-1"></div>
                          <div className="w-1/6 h-[70%] bg-[#d6f871] rounded-t-md mx-1"></div>
                          <div className="w-1/6 h-[45%] bg-gray-200 rounded-t-md mx-1"></div>
                          <div className="w-1/6 h-[50%] bg-gray-200 rounded-t-md mx-1"></div>
                        </div>
                        <div className="absolute top-0 left-0 right-0 h-full">
                          <div className="border-t border-dashed border-gray-300 relative top-1/4">
                            <span className="absolute -top-3 -right-4 text-xs text-gray-500">75%</span>
                          </div>
                          <div className="border-t border-dashed border-gray-300 relative top-2/4">
                            <span className="absolute -top-3 -right-4 text-xs text-gray-500">50%</span>
                          </div>
                          <div className="border-t border-dashed border-gray-300 relative top-3/4">
                            <span className="absolute -top-3 -right-4 text-xs text-gray-500">25%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Online Shopping</div>
                        <div className="text-xs text-gray-500">Amazon</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-$99.00</div>
                      <div className="text-xs text-gray-500">Apr 28, 2023</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Groceries</div>
                        <div className="text-xs text-gray-500">Whole Foods</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-$76.20</div>
                      <div className="text-xs text-gray-500">Apr 24, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#d6f871]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#d6f871]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Fast Money Transfers</h3>
                  <p className="text-gray-600 mb-6">
                    Send money to friends and family instantly, anywhere in the world.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">AK</div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">BL</div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">CP</div>
                    <div className="w-12 h-12 bg-[#d6f871] rounded-full flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-medium">Amount to send</div>
                      <div className="font-bold text-xl">$150.00</div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">JD</div>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-gray-500">@johndoe</div>
                        </div>
                      </div>
                      <div className="text-[#d6f871] font-medium text-sm">
                        <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Connected
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#d6f871] hover:bg-[#c4e95c] text-gray-900 font-medium py-3 rounded-lg transition">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 