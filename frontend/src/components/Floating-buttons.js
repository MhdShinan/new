'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Shield } from 'lucide-react';  

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+94766356336"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact us on WhatsApp"
      >
        <div className="p-4 rounded-full bg-[#25D366] hover:bg-[#20bf5b] transform hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        {/* Animated Ripple Effect */}
        <div
          className={`
          absolute inset-0 rounded-full
          animate-ping
          bg-[#25D366] opacity-20
          ${isHovered ? 'scale-110' : 'scale-100'}
          transition-transform duration-300
        `}
        />

        {/* Tooltip */}
        <div
          className={`
          absolute right-full mr-4 top-1/2 -translate-y-1/2
          bg-black text-white text-sm
          px-3 py-1.5 rounded-lg
          whitespace-nowrap
          transition-all duration-300
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
          before:content-['']
          before:absolute
          before:right-[-8px]
          before:top-1/2
          before:-translate-y-1/2
          before:border-[8px]
          before:border-transparent
          before:border-l-black
        `}
        >
          Chat with us on WhatsApp
        </div>
      </a>

      {/* Scroll to Top Button with Shield and Circular Design */}
      <button
        onClick={scrollToTop}
        className={`
          p-6 rounded-full
          bg-gradient-to-br from-blue-500 to-indigo-600
          text-white hover:bg-gradient-to-tl
          transform transition-all duration-500 ease-out
          shadow-lg hover:shadow-xl
          ${showScroll ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-180'}
          group relative
        `}
        aria-label="Scroll to top"
      >
        <div
          className="
            absolute inset-0 rounded-full bg-black opacity-30
            group-hover:opacity-40 transition-all duration-300"
        />
        <ArrowUp
          className="w-6 h-6 text-white 
            transform transition-transform duration-300
            group-hover:scale-110"
        />
        <Shield
          className="absolute inset-0 w-full h-full text-white opacity-20 group-hover:opacity-30 transition-all duration-300"
        />
      </button>
    </div>
  );
}