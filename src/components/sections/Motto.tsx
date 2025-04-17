export default function Motto() {
  return (
    <section id="motto" className="relative py-24 overflow-hidden bg-white">
      {/* Background decoration - repositioned circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#d6f871] rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#d6f871] rounded-full opacity-25"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Smart Finance, Maximum Returns
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Reach your financial goals faster with our modern banking solutions. Our smart financial tools help you maximize returns on your investments while offering significant advantages for your daily banking transactions.
          </p>
        </div>
        
        <div className="space-y-6 mb-10">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d6f871] bg-opacity-30 rounded-full flex items-center justify-center mt-1">
              <svg className="h-5 w-5 text-[#6b801a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Smart Financial Solutions</h3>
              <p className="mt-1 text-gray-600">Maximize returns on your investments with our AI-powered financial tools.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d6f871] bg-opacity-30 rounded-full flex items-center justify-center mt-1">
              <svg className="h-5 w-5 text-[#6b801a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Up to 3% Cashback</h3>
              <p className="mt-1 text-gray-600">Enjoy up to 3% cashback on every purchase and up to 50% with our partner services.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d6f871] bg-opacity-30 rounded-full flex items-center justify-center mt-1">
              <svg className="h-5 w-5 text-[#6b801a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Free Transfer Services</h3>
              <p className="mt-1 text-gray-600">Complete all your domestic and international transfers free of charge.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d6f871] bg-opacity-30 rounded-full flex items-center justify-center mt-1">
              <svg className="h-5 w-5 text-[#6b801a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Zero Card Fees</h3>
              <p className="mt-1 text-gray-600">All our debit and credit cards are offered with no annual fees.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d6f871] bg-opacity-30 rounded-full flex items-center justify-center mt-1">
              <svg className="h-5 w-5 text-[#6b801a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">24/7 Digital Banking</h3>
              <p className="mt-1 text-gray-600">Easily complete all your transactions anytime with our mobile and internet banking services.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#c5e861] to-[#d6f871] hover:from-[#d6f871] hover:to-[#e3ff7e] text-[#171717] rounded-full cursor-pointer text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6f871]">
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}
