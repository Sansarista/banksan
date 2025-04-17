"use client"
import { useEffect, useRef, useState } from 'react'

// Çizgi animasyonu için arayüz
interface Line {
  id: number
  x: number
  y: number
  angle: number
  length: number
  speed: number
  lifetime: number
  currentLife: number
  color: string
  width: number
  isFading: boolean
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const totalCards = 3
  
  // Animasyon için referanslar
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const linesRef = useRef<Line[]>([])
  const animationFrameRef = useRef<number>(0)
  
  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      })
    }
    
    // Only add mouse move listener on desktop devices
    const isMobile = window.innerWidth < 768
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Arkaplan animasyonu
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Canvas boyutunu ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // İlk boyutu ayarla
    resizeCanvas()
    
    // Pencere boyutu değişirse canvas'ı güncelle
    window.addEventListener('resize', resizeCanvas)
    
    // Yeni çizgi oluştur
    const createLine = (): Line => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      // Sadece yatay veya dikey hareket için açıyı 0, 90, 180 veya 270 derece olarak ayarla
      const directions = [0, Math.PI/2, Math.PI, Math.PI*3/2]
      const angle = directions[Math.floor(Math.random() * directions.length)]
      const speed = 0.7 + Math.random() * 0.4 // Daha yavaş hareket etsin
      const lifetime = 500 + Math.random() * 300 // Daha uzun yaşam süresi
      const lineColors = ['#d6f871', '#d6f871', '#d6f871']
      const color = lineColors[Math.floor(Math.random() * lineColors.length)]
      
      return {
        id: Math.random(),
        x,
        y,
        angle,
        length: 20, // Sabit uzunluk - 20 blok
        speed,
        lifetime,
        currentLife: 0,
        color,
        width: 2, // Sabit genişlik (2px)
        isFading: false // Silinme animasyonu için bayrak
      }
    }
    
    // Ekranda her zaman bulunan çizgi sayısı
    const TOTAL_LINES = 6
    
    // Başlangıçta çizgiler oluştur - sabit sayıda çizgi
    for (let i = 0; i < TOTAL_LINES; i++) {
      const line = createLine()
      
      // Çizgilerin ekrana dengeli dağılımını sağla
      line.x = (canvas.width / TOTAL_LINES) * i + (canvas.width / TOTAL_LINES / 2) 
      line.y = (i % 2 === 0) ? 
        canvas.height * 0.25 + Math.random() * canvas.height * 0.2 : 
        canvas.height * 0.6 + Math.random() * canvas.height * 0.2
      
      linesRef.current.push(line)
    }
    
    // Bir çizginin tarihçesini tutmak için yardımcı dizi
    const lineHistories: {x: number, y: number, angle: number}[][] = Array(TOTAL_LINES).fill(0).map(() => [])
    
    // Çizgileri güncelle ve çiz
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Her çizgi için
      for (let i = 0; i < linesRef.current.length; i++) {
        const line = linesRef.current[i]
        
        // Çizginin yaşam süresini artır
        line.currentLife++
        
        // Önceki pozisyonu kaydet (kuyruk için)
        if (lineHistories[i].length === 0 || 
            Math.abs(lineHistories[i][0].x - line.x) >= line.width || 
            Math.abs(lineHistories[i][0].y - line.y) >= line.width) {
          // Pozisyonu ve açıyı kaydet
          lineHistories[i].unshift({
            x: line.x,
            y: line.y,
            angle: line.angle
          })
          
          // Tarihçeyi maksimum uzunlukta tut
          if (lineHistories[i].length > line.length) {
            lineHistories[i].pop()
          }
        }
        
        // Yeni pozisyonu hesapla
        if (!line.isFading) { // Sadece silinen çizgiler hareket etmesin
          line.x += Math.cos(line.angle) * line.speed
          line.y += Math.sin(line.angle) * line.speed
        }
        
        // Rastgele yön değiştirme - daha az sıklıkta
        if (!line.isFading && Math.random() < 0.008) {
          // Sadece 90 derecelik dönüşler yapabilir (yatay veya dikey)
          const directions = [0, Math.PI/2, Math.PI, Math.PI*3/2]
          const currentIndex = directions.indexOf(line.angle)
          
          // Sadece sağa veya sola dönebilir (180 derece dönüş yok)
          const newDirectionOptions = [
            (currentIndex + 1) % directions.length,
            (currentIndex + 3) % directions.length
          ]
          
          const randomOption = Math.floor(Math.random() * 2)
          const newDirection = directions[newDirectionOptions[randomOption]]
          
          // Açıyı değiştir
          line.angle = newDirection
        }
        
        // Yavaş yavaş kaybolma aşamasında mı kontrol et (1-2 saniye içinde)
        if (line.currentLife > line.lifetime) {
          if (!line.isFading) {
            line.isFading = true
            // Tarihçeyi koruyarak sadece durduralım, daha sonra tarihçeyi kısaltarak kaybolma efekti vereceğiz
          }
        }
        
        // Sınırları kontrol et - sınıra yaklaştığında yeni çizgi oluştur
        const padding = 20
        if (
          !line.isFading && (
            line.x < -padding || 
            line.x > canvas.width + padding || 
            line.y < -padding || 
            line.y > canvas.height + padding
          )
        ) {
          // Çizgiyi silinme moduna geçir
          line.isFading = true
        }
        
        // Çizgiyi ve kuyruğunu çiz (bloklar halinde)
        const BLOCK_SIZE = 2
        const opacity = Math.max(0.3, 1 - (line.currentLife / line.lifetime))
        
        // Ana bloğu (çizginin başı) çiz - silinme modunda başı çizme
        if (!line.isFading) {
          ctx.fillStyle = `${line.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`
          ctx.fillRect(
            Math.round(line.x - BLOCK_SIZE / 2), 
            Math.round(line.y - BLOCK_SIZE / 2), 
            BLOCK_SIZE, 
            BLOCK_SIZE
          )
        }
        
        // Kuyruk bloklarını çiz
        const tailBlocks = [...lineHistories[i]] // Orijinal diziyi değiştirmemek için kopya oluştur
        
        // Silinme modunda ise, her 5 frame'de bir kuyruktan bir blok azalt
        if (line.isFading && line.currentLife % 5 === 0 && tailBlocks.length > 0) {
          // Tarihçeyi azalt (kuyruktan başlayarak silinme efekti)
          lineHistories[i].pop()
          
          // Eğer kuyruk tamamen bittiyse, yeni bir çizgi oluştur
          if (lineHistories[i].length === 0) {
            const newLine = createLine()
            
            // Rastgele kenardan başlat
            const edge = Math.floor(Math.random() * 4)
            if (edge === 0) { // Üst
              newLine.x = Math.random() * canvas.width
              newLine.y = -10
              newLine.angle = Math.PI / 2 // Aşağı
            } else if (edge === 1) { // Sağ
              newLine.x = canvas.width + 10
              newLine.y = Math.random() * canvas.height
              newLine.angle = Math.PI // Sol
            } else if (edge === 2) { // Alt
              newLine.x = Math.random() * canvas.width
              newLine.y = canvas.height + 10
              newLine.angle = Math.PI * 3/2 // Yukarı
            } else { // Sol
              newLine.x = -10
              newLine.y = Math.random() * canvas.height
              newLine.angle = 0 // Sağ
            }
            
            // Eski çizgiyi yenisiyle değiştir
            linesRef.current[i] = newLine
            lineHistories[i] = []
          }
        }
        
        tailBlocks.forEach((pos, index) => {
          // Opaklığı hesapla (kuyruk ucuna doğru azalır)
          let tailOpacity = opacity * (1 - index / line.length)
          
          // Silinme modunda ise ekstra şeffaflık uygula
          if (line.isFading) {
            tailOpacity *= 0.8
          }
          
          if (tailOpacity > 0.05) { // Çok transparan olanları gösterme
            ctx.fillStyle = `${line.color}${Math.floor(tailOpacity * 255).toString(16).padStart(2, '0')}`
            ctx.fillRect(
              Math.round(pos.x - BLOCK_SIZE / 2),
              Math.round(pos.y - BLOCK_SIZE / 2),
              BLOCK_SIZE, 
              BLOCK_SIZE
            )
          }
        })
      }
      
      // Çizgi sayısını kontrol et ve gerekirse yenilerini ekle
      if (linesRef.current.length < TOTAL_LINES) {
        // Gerekli sayıda yeni çizgi ekle
        const numToAdd = TOTAL_LINES - linesRef.current.length
        for (let i = 0; i < numToAdd; i++) {
          const newLine = createLine()
          
          // Rastgele kenardan başlat
          const edge = Math.floor(Math.random() * 4)
          if (edge === 0) { // Üst
            newLine.x = Math.random() * canvas.width
            newLine.y = -10
            newLine.angle = Math.PI / 2 // Aşağı
          } else if (edge === 1) { // Sağ
            newLine.x = canvas.width + 10
            newLine.y = Math.random() * canvas.height
            newLine.angle = Math.PI // Sol
          } else if (edge === 2) { // Alt
            newLine.x = Math.random() * canvas.width
            newLine.y = canvas.height + 10
            newLine.angle = Math.PI * 3/2 // Yukarı
          } else { // Sol
            newLine.x = -10
            newLine.y = Math.random() * canvas.height
            newLine.angle = 0 // Sağ
          }
          
          linesRef.current.push(newLine)
          
          // Yeni tarihçe ekle
          if (lineHistories.length <= linesRef.current.length - 1) {
            lineHistories.push([])
          }
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    // Animasyonu başlat
    animate()
    
    // Temizleme işlevi
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
      linesRef.current = [] // Belleği temizle
    }
  }, [])

  // Auto-switch cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % totalCards)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Card data
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
  
  // Get card style based on variant
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
  
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-[#171717] flex items-center justify-center pt-24 pb-10 md:pb-16 lg:py-0">
      {/* Animasyonlu arka plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black opacity-90"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8">
        {/* Floating accent bars - only visible on desktop */}
        <div className="absolute left-0 top-[25%] w-1 h-20 bg-gradient-to-b from-transparent via-[#d6f871] to-transparent opacity-50 hidden lg:block"></div>
  
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Text content section - redesigned and centered on mobile */}
          <div className={`w-full lg:w-3/5 text-center lg:text-left transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Large headline - simplified and centered on mobile */}
            <div className="relative mb-8 md:mb-10">
              <h1 className="font-sans text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
                <div className="relative">
                  <span className="block mb-2 text-white text-opacity-90">Redefining</span>
                </div>
                <div className="relative">
                  <span className="block mb-2 text-white text-opacity-90">Your <span className="text-[#d6f871] font-normal">Financial</span></span>
                </div>
                <div className="relative">
                  <span className="block text-white text-opacity-90">Experience</span>
                </div>
              </h1>
              
              {/* Tagline - simplified with no border */}
              <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-md mx-auto lg:mx-0 font-light">
                Minimalist banking for the modern world — secure, seamless, and smart.
              </p>
            </div>
            
            {/* Feature points - centered grid on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-3 text-zinc-300 group">
                <div className="mt-1 p-1.5 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#d6f871]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#d6f871]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-sm opacity-90 group-hover:text-[#d6f871] transition-colors text-left">Advanced security with biometric authentication</p>
              </div>
              <div className="flex items-start gap-3 text-zinc-300 group">
                <div className="mt-1 p-1.5 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#d6f871]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#d6f871]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm opacity-90 group-hover:text-[#d6f871] transition-colors text-left">Real-time insights for better money management</p>
              </div>
              <div className="flex items-start gap-3 text-zinc-300 group">
                <div className="mt-1 p-1.5 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#d6f871]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#d6f871]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm opacity-90 group-hover:text-[#d6f871] transition-colors text-left">Instant transfers anywhere in the world</p>
              </div>
              <div className="flex items-start gap-3 text-zinc-300 group">
                <div className="mt-1 p-1.5 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#d6f871]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#d6f871]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <p className="text-sm opacity-90 group-hover:text-[#d6f871] transition-colors text-left">Cloud-based access on any device</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-8">
              <button className="relative group px-7 py-3.5 bg-gradient-to-r from-[#c5e861] to-[#d6f871] hover:from-[#d6f871] hover:to-[#e3ff7e] rounded-full text-sm font-medium text-zinc-900 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d6f871]/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <a className="text-white text-sm font-medium cursor-pointer hover:underline" href="#motto">Check Our Motto</a>
            </div>
          </div>
          <div className={`w-full lg:w-2/5 mt-8 md:mt-10 lg:mt-0 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative max-w-[300px] h-[320px] mx-auto">
              <div className="relative h-full flex items-center justify-center">
                {cards.map((card, index) => {
                  const style = getCardStyle(card.variant)
                  const isActive = index === activeCard
                  const isPrevious = (index === activeCard - 1) || (activeCard === 0 && index === totalCards - 1)
                  const isNext = (index === activeCard + 1) || (activeCard === totalCards - 1 && index === 0)
                  
                  return (
                    <div 
                      key={card.id}
                      className={`absolute w-full h-56 rounded-xl ${style.bg} border border-zinc-700/20 shadow-2xl overflow-hidden 
                        transition-all duration-500 ease-out cursor-pointer
                        ${isActive ? 'z-30 opacity-100 translate-y-0 scale-100' : ''}
                        ${isPrevious ? 'z-20 opacity-90 -translate-y-10 scale-95' : ''}
                        ${isNext ? 'z-10 opacity-80 translate-y-10 scale-95' : ''}
                        ${!isActive && !isPrevious && !isNext ? 'opacity-0 translate-y-20 scale-90' : ''}
                      `}
                      style={{
                        transform: `${isActive ? `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)` : ''}`,
                        transformStyle: 'preserve-3d'
                      }}
                      onClick={() => setActiveCard(index)}
                    >
                      {/* Card content */}
                      <div className="p-5 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className={`w-12 h-8 rounded-md ${style.chip} opacity-90`}></div>
                          <div className="text-[10px] text-zinc-500 font-mono">{card.type}</div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className={`text-xs ${style.text} font-mono`}>{card.cardNumber}</div>
                          <div className="flex justify-between items-end">
                            <div className="space-y-1">
                              <div className="text-[10px] text-zinc-500 font-mono">CARD HOLDER</div>
                              <div className="text-xs text-zinc-300 font-mono">{card.cardHolder}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-[10px] text-zinc-500 font-mono">EXPIRES</div>
                              <div className="text-xs text-zinc-300 font-mono">{card.expires}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card reflection */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                  )
                })}
              </div>
              
              {/* Card Reflection */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 rounded-lg bg-black/20 blur-md"
                style={{
                  width: '90%',
                  transform: `translateX(-50%) scaleY(0.3) perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
                  opacity: 0.3
                }}
              ></div>
              
              {/* Navigation Dots */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                {cards.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActiveCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeCard ? 'bg-[#d6f871]/80 scale-125' : 'bg-zinc-700'}`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
