import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { AlignLeft, X } from 'lucide-react'

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleNavClick = () => {
        setIsClicked(!isClicked);
    }

     const [scrolling, setScrolling] = useState(false);
    
     useEffect(()=>{
      const handleScroll = () => {
        const scroll = window.scrollY;
    
        if(scroll > 100){
         setScrolling(true);
        } else{
           setScrolling(false);
         }
     };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
     }, [])
  return (
    <header className={`${scrolling ? 'backdrop-blur-sm bg-gradient-to-r from-neutral-900/50 via-neutral-900/50  to-gray-900/50 animate-in duration-500' : 'bg-transparent duration-500 animate-out'} fixed top-0 z-[500] w-full`}>
    <div className="container flex items-center justify-between py-4">
        <div className='z-10'>
        {/* logo */}
        <a className='font-bold text-white md:text-lg' href="/">Piyush <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Channawar</span></a>
    </div>

    {/* navigation */}
    <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />


    {/* menu button */}
    <button onClick={toggleNavClick} className='text-white cursor-pointer z-10 flex items-center lg:hidden'>
        {isClicked? (
            <X size={28} />
        ) : (
            <AlignLeft size={28} />
        )}  
    </button>
    </div>
    </header>
  )
}

export default Header