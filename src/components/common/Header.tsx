'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    {
        label: "Home",
        path: "/",
        href: "/",
    },
    {
        label: "Features",
        path: "/features",
        href: "/features",
    },
    {
        label: "About Us",
        path: "/about-us",
        href: "/about-us",
    },
    {
        label: "Contact",
        path: "/contact",
        href: "/contact",
    },
]

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Set mobile breakpoint to match Tailwind's md breakpoint (768px)
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Clean up function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 flex flex-row justify-between items-center p-4 bg-transparent z-50">
        <Link href="/" className="flex items-center z-50">
            <div className="flex items-center">
              <div className="w-10 h-10 relative mr-2">
                <Image 
                  src="/b-cropped.svg" 
                  alt="Banksan" 
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span className="font-logo text-2xl font-bold text-white tracking-tight">Banksan</span>
            </div>
        </Link>
        
        {/* Mobile hamburger button - only visible on md and smaller screens */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden z-50 flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'w-5 translate-y-2 rotate-45' : 'w-6'}`}></span>
          <span className={`block h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
          <span className={`block h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'w-5 -translate-y-2 -rotate-45' : 'w-6'}`}></span>
        </button>

        {/* Desktop navigation - visible on md and larger screens */}
        <nav className="hidden md:flex flex-row justify-between items-center py-4 px-8 gap-8 bg-white/10 text-white rounded-full border border-white/10">
          <ul className="flex flex-row justify-between items-center gap-8">
              {navItems.map((item: any) => (
                  <li key={item.path}>
                      <Link href={item.path} className={`${pathname === item.path ? "text-primary hover:text-primary/80" : "text-white/60 hover:text-white"} font-logo font-medium`}>{item.label}</Link>
                  </li>
              ))}
          </ul>
        </nav>

        <div 
          className={`md:hidden fixed inset-0 flex flex-col bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`
          }
        >
          <div className="w-full h-full mt-24 px-5 py-6">
            <nav className="h-full flex flex-col justify-between">
              <ul className="flex flex-col space-y-6 py-8">
                {navItems.map((item, index) => (
                  <li 
                    key={item.path}
                    style={{ 
                      animationDelay: `${(index + 1) * 100}ms`,
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <Link 
                      href={item.path} 
                      className={`block text-3xl font-logo font-bold tracking-wide hover:pl-2 transition-all duration-200
                        ${pathname === item.path 
                          ? "text-primary border-l-4 border-primary pl-4" 
                          : "text-white/70 hover:text-white border-l-4 border-transparent"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="pb-12">
                <div 
                  className="w-full flex flex-col space-y-4 border-t border-white/10 pt-6"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <button 
                    className="bg-primary text-black rounded-full px-8 py-4 cursor-pointer hover:bg-white font-medium font-logo"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </button>
                  <p className="text-white/50 text-center text-sm mt-4">© {new Date().getFullYear()} <span className="font-logo font-bold">Banksan</span>. All rights reserved.</p>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Desktop sign up button - visible on md and larger screens */}
        <div className="hidden md:flex flex-row justify-between items-center gap-4">
            <button className="bg-primary text-black rounded-full px-8 py-4 cursor-pointer hover:bg-white font-medium font-logo">Sign Up</button>
        </div>
    </header>
  )
}
