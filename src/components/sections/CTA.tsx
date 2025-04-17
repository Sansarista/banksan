export default function CTA() {
  return (
    <section className="bg-gray-800 py-16 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Take Control of Your Finances Today!
          </h2>
          
          <p className="text-gray-300 mb-10 text-lg">
            Are you ready to experience a smarter way to manage your finances? Try our platform today!
          </p>
          
          <button className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center gap-2">
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 