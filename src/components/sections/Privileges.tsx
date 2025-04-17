"use client"
import { useEffect, useState } from 'react'

export default function Privileges() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [activeCard, setActiveCard] = useState(0)
    const [activeInsight, setActiveInsight] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(false)
    
    const totalCards = 3
    const totalInsights = 5
    
    useEffect(() => {
        setIsLoaded(true)
        
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 640)
            
            const handleResize = () => {
                setIsMobile(window.innerWidth < 640)
            }
            
            window.addEventListener('resize', handleResize)

            const handleMouseMove = (e: MouseEvent) => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) - 0.5,
                    y: (e.clientY / window.innerHeight) - 0.5
                })
            }
            
            const isMobileDevice = window.innerWidth < 768
            if (!isMobileDevice) {
                window.addEventListener('mousemove', handleMouseMove)
                return () => {
                    window.removeEventListener('mousemove', handleMouseMove)
                    window.removeEventListener('resize', handleResize)
                }
            }
            
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % totalCards)
        }, 4000)
        
        return () => clearInterval(interval)
    }, [])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveInsight((prev) => (prev + 1) % totalInsights)
        }, 3000)
        
        return () => clearInterval(interval)
    }, [])
    
    const cards = [
        {
            id: 0,
            cardNumber: "•••• •••• •••• 4289",
            cardHolder: "J. SMITH",
            expires: "05/32",
            type: "VIRTUAL",
            variant: "lime"
        },
        {
            id: 1,
            cardNumber: "•••• •••• •••• 5317",
            cardHolder: "A. JOHNSON",
            expires: "09/26",
            type: "PLATINUM",
            variant: "default"
        },
        {
            id: 2,
            cardNumber: "•••• •••• •••• 7732",
            cardHolder: "M. DAVIS",
            expires: "11/29",
            type: "BUSINESS",
            variant: "dark"
        }
    ]
    
    const insights = [
        {
            id: 0,
            category: "Freelance",
            description: "Unregular payment",
            amount: "$1,500",
            color: "bg-green-500",
            icon: "user"
        },
        {
            id: 1,
            category: "Shopping",
            description: "Monthly budget",
            amount: "$320",
            color: "bg-blue-500",
            icon: "shopping"
        },
        {
            id: 2,
            category: "Savings",
            description: "Investment plan",
            amount: "$2,750",
            color: "bg-purple-500",
            icon: "chart"
        },
        {
            id: 3,
            category: "Subscriptions",
            description: "Monthly services",
            amount: "$45",
            color: "bg-red-500",
            icon: "shopping"
        },
        {
            id: 4,
            category: "Utilities",
            description: "Household bills",
            amount: "$210",
            color: "bg-yellow-500",
            icon: "chart"
        }
    ]
    
    const getCardStyle = (variant: string) => {
        switch(variant) {
            case 'lime':
                return {
                    bg: "bg-gradient-to-br from-zinc-900 to-zinc-800",
                    chip: "bg-gradient-to-br from-[#c5e861] to-[#d6f871]",
                    text: "text-[#d6f871]/90"
                }
            case 'default':
                return {
                    bg: "bg-gradient-to-br from-zinc-800 to-zinc-900",
                    chip: "bg-gradient-to-br from-zinc-400 to-zinc-500",
                    text: "text-zinc-400/90"
                }
            case 'dark':
                return {
                    bg: "bg-gradient-to-br from-zinc-950 to-black",
                    chip: "bg-gradient-to-br from-zinc-700 to-zinc-800",
                    text: "text-zinc-500/90"
                }
            default:
                return {
                    bg: "bg-gradient-to-br from-zinc-900 to-zinc-800",
                    chip: "bg-gradient-to-br from-[#c5e861] to-[#d6f871]",
                    text: "text-[#d6f871]/90"
                }
        }
    }
    
    const IconComponent = ({ type, className }: { type: string, className: string }) => {
        switch (type) {
            case "user":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                )
            case "shopping":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                )
            case "chart":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 ai-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <div className="bg-white">
            <div className="flex flex-col items-center justify-center w-full h-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[24rem] pt-4 gap-6">
                <div className="flex flex-col items-center justify-center w-full h-auto">
                    <div className="w-full h-auto">
                        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-logo text-gray-900 leading-tight mb-4 md:mb-6">Simple, fast & hassle-free</h2>
                    </div>
                    <div className="w-full h-auto">
                        <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            Reach your financial goals faster with our modern banking solutions. Our smart financial tools help you maximize returns on your investments while offering significant advantages for your daily banking transactions.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center w-full h-full py-4 gap-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full h-full">
                        <div className="h-auto lg:h-[600px] w-full bg-[#ebeded] p-4 sm:p-6 md:p-8 rounded-3xl flex flex-col justify-between overflow-hidden">
                            <div className="flex flex-col">
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-logo text-gray-900 leading-tight w-full md:w-[70%] mb-3 md:mb-6">
                                    Sync your bank, wallet or card securely
                                </h1>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
                                    Create a custom card that reflects your unique style and preferences. Choose from a range of colors, patterns and designs to customize the look of your card.
                                </p>
                            </div>
                            
                            <div className={`relative w-full h-[200px] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="relative h-full flex items-center justify-center">
                                    {cards.map((card, index) => {
                                        const style = getCardStyle(card.variant)
                                        const isActive = index === activeCard
                                        const isPrevious = (index === activeCard - 1) || (activeCard === 0 && index === totalCards - 1)
                                        const isNext = (index === activeCard + 1) || (activeCard === totalCards - 1 && index === 0)
                                        
                                        const cardWidth = "w-64 sm:w-72"
                                        const cardHeight = "h-40 sm:h-48"
                                        const translateX = {
                                            previous: 'sm:-translate-x-[180px] -translate-x-[120px]',
                                            next: 'sm:translate-x-[180px] translate-x-[120px]'
                                        }
                                        
                                        return (
                                            <div 
                                                key={card.id}
                                                className={`absolute ${cardWidth} ${cardHeight} rounded-xl ${style.bg} border border-zinc-700/20 shadow-2xl overflow-hidden 
                                                    transition-all duration-500 ease-out cursor-pointer
                                                    ${isActive ? 'z-30 opacity-100 scale-100 translate-x-0' : ''}
                                                    ${isPrevious ? `z-20 opacity-90 scale-95 ${translateX.previous}` : ''}
                                                    ${isNext ? `z-10 opacity-80 scale-95 ${translateX.next}` : ''}
                                                    ${!isActive && !isPrevious && !isNext ? 'opacity-0 scale-90 translate-x-[350px]' : ''}
                                                `}
                                                style={{
                                                    transform: `${isActive ? `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)` : ''}`,
                                                    transformStyle: 'preserve-3d'
                                                }}
                                                onClick={() => setActiveCard(index)}
                                            >
                                                <div className="p-4 sm:p-5 h-full flex flex-col justify-between">
                                                    <div className="flex justify-between items-start">
                                                        <div className={`w-8 sm:w-10 h-6 sm:h-7 rounded-md ${style.chip} opacity-90`}></div>
                                                        <div className="text-[10px] text-zinc-500 font-mono">{card.type}</div>
                                                    </div>
                                                    
                                                    <div className="space-y-2 sm:space-y-3">
                                                        <div className={`text-xs sm:text-sm ${style.text} font-mono`}>{card.cardNumber}</div>
                                                        <div className="flex justify-between items-end">
                                                            <div className="space-y-1">
                                                                <div className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">CARD HOLDER</div>
                                                                <div className="text-[10px] sm:text-xs text-zinc-300 font-mono">{card.cardHolder}</div>
                                                            </div>
                                                            <div className="space-y-1">
                                                                <div className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">EXPIRES</div>
                                                                <div className="text-[10px] sm:text-xs text-zinc-300 font-mono">{card.expires}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                <div 
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-72 h-8 sm:h-12 rounded-lg bg-black/20 blur-md"
                                    style={{
                                        transform: `translateX(-50%) scaleY(0.3) perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
                                        opacity: 0.3
                                    }}
                                ></div>
                            </div>
                        </div>
                        
                        <div className="h-auto lg:h-[600px] w-full bg-[#ebeded] p-4 sm:p-6 md:p-8 rounded-3xl overflow-hidden">
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex flex-col">
                                    <h1 className="text-xl sm:text-2xl md:text-3xl font-logo text-gray-900 leading-tight w-full md:w-[70%] mb-3 md:mb-6">
                                        Get AI-driven insights to manage spending and grow wealth
                                    </h1>
                                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
                                        Our AI-powered tools provide personalized insights and recommendations to help you make informed decisions.
                                    </p>
                                </div>
                                
                                <div className="relative mt-8 mb-8 sm:-mt-[150px] md:-mt-[250px]">
                                    <div className="w-full relative h-[220px] flex items-center justify-center">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative w-full max-w-md flex justify-center">
                                                {insights.map((insight, index) => {
                                                    const normalizedIndex = (index - activeInsight + insights.length) % insights.length;
                                                    let posX = 0;
                                                    let opacity = 1;
                                                    let scale = 1;
                                                    let zIndex = 50;
                                                    let isVisible = true;
                                                    
                                                    const position1 = isMobile ? 100 : 140;
                                                    const position2 = isMobile ? 180 : 250;
                                                    
                                                    if (normalizedIndex === 0) {
                                                        posX = 0;
                                                        opacity = 1;
                                                        scale = 1;
                                                        zIndex = 50;
                                                    } else if (normalizedIndex === 1 || normalizedIndex === insights.length - 1) {
                                                        posX = normalizedIndex === 1 ? position1 : -position1;
                                                        opacity = 0.7;
                                                        scale = 0.9;
                                                        zIndex = 40;
                                                    } else if (normalizedIndex === 2 || normalizedIndex === insights.length - 2) {
                                                        posX = normalizedIndex === 2 ? position2 : -position2;
                                                        opacity = 0.4;
                                                        scale = 0.8;
                                                        zIndex = 30;
                                                    } else {
                                                        isVisible = false;
                                                    }
                                                    
                                                    if (!isVisible) return null;
                                                    
                                                    const bgColor = 'bg-white';
                                                    const textColor = normalizedIndex === 0 ? insight.color.replace('bg-', 'text-') : 'text-gray-900';
                                                    
                                                    return (
                                                        <div 
                                                            key={insight.id}
                                                            className={`absolute w-[180px] sm:w-[220px] md:w-[240px] h-[110px] sm:h-[130px] shadow-md border border-gray-100 rounded-xl transition-all duration-500 ease-out cursor-pointer ${bgColor}`}
                                                            style={{
                                                                transform: `translateX(${posX}px) scale(${scale})`,
                                                                opacity: opacity,
                                                                zIndex: zIndex,
                                                                top: normalizedIndex === 0 ? '0px' : '30px'
                                                            }}
                                                            onClick={() => setActiveInsight(index)}
                                                        >
                                                            <div className="flex flex-col h-full p-3 sm:p-4 md:p-5">
                                                                <div className="flex items-center mb-1 sm:mb-2">
                                                                    <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${insight.color}`}>
                                                                        <IconComponent 
                                                                            type={insight.icon} 
                                                                            className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-white" 
                                                                        />
                                                                    </div>
                                                                    <h4 className={`font-medium text-xs sm:text-sm md:text-base ml-2 ${textColor}`}>
                                                                        {insight.category}
                                                                    </h4>
                                                                </div>
                                                                <p className="text-[10px] sm:text-xs text-gray-600 mt-1">
                                                                    {insight.description}
                                                                </p>
                                                                <div className="mt-auto">
                                                                    <span className={`text-lg sm:text-xl md:text-2xl font-semibold ${textColor}`}>
                                                                        {insight.amount}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 h-full w-full">
                        <div className="h-full min-h-[220px] sm:min-h-[300px] w-full bg-[#ebeded] p-4 sm:p-6 md:p-8 rounded-3xl overflow-hidden relative">
                            <div className="absolute right-0 top-0 bottom-0 w-full h-full opacity-10 sm:opacity-30 pointer-events-none">
                                <div className="w-full h-full bg-[url('/new-map.svg')] bg-no-repeat bg-center bg-size-[200%] lg:bg-size-[100%]">
                                </div>
                            </div>
                            
                            <div className="relative z-10 h-full">
                                <div className="flex flex-col md:flex-row items-start justify-between h-full w-full">
                                    <div className="max-w-md">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-logo text-gray-900 leading-tight mb-3 sm:mb-4">
                                            Create your account<br className="hidden sm:block" /> in minutes
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base max-w-sm mb-6">
                                            Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="bg-[#19483b] p-3 sm:p-4 rounded-lg shadow-lg text-white 
                                                sm:absolute sm:bottom-0 sm:right-0 sm:mr-6 sm:mb-6 md:mr-8 md:mb-8
                                                w-full sm:w-36 md:w-44">
                                    <div className="flex items-center justify-between sm:block">
                                        <div>
                                            <div className="text-xl sm:text-2xl md:text-3xl font-bold">107+</div>
                                            <div className="text-[10px] sm:text-xs md:text-sm mt-1">Happy Clients and Counting!</div>
                                        </div>
                                        
                                        <div className="flex -space-x-1 sm:mt-3">
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/90 border-2 border-[#19483b] overflow-hidden">
                                                <div className="w-full h-full bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/90 border-2 border-[#19483b] overflow-hidden">
                                                <div className="w-full h-full bg-gray-300 rounded-full"></div>
                                            </div>
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/90 border-2 border-[#19483b] overflow-hidden">
                                                <div className="w-full h-full bg-gray-400 rounded-full"></div>
                                            </div>
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/90 border-2 border-[#19483b] overflow-hidden">
                                                <div className="w-full h-full bg-gray-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
