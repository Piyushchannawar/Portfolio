import React, { useEffect, useState} from "react";

const navigation = [
  { title: "home", url: "#home" },
  { title: "projects", url: "#projects" },
  { title: "about", url: "#about" },
  { title: "skills", url: "#skills" },
  { title: "contact", url: "#contact" }, // Fixed typo
];

function Navbar({ isClicked, toggleNavClick }) {

  const [activeLink, setActiveLink] = useState('home');
 

  useEffect(()=>{
    const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      if(section){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;


        if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight){
          setActiveLink(section.id);
        }
      }
    })
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <>
      {/* Mobile nav */}
      <nav
        className={`fixed top-0 left-0 h-screen w-full flex items-center justify-start 
        transition-all duration-500 lg:hidden 
        ${isClicked ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-24">
          {navigation.map((item) => (
            <li key={item.title} className="mb-4 text-lg font-medium capitalize">
              <a
                className={` ${activeLink === item.title ? 'text-blue-600' : 'text-white'} hover:text-blue-600 transition-colors duration-300 ease-in`}
                href={item.url}
                onClick={() => toggleNavClick()}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md:inline-flex">
          <ul className="flex gap-10 capitalize ">
            {navigation.map((item) => (
              <li key={item.title} className="inline-block">
                <a
                  className={`relative font-semibold after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:after:bg-blue-600 hover:after:w-full ${activeLink === item.title ? 'text-blue-600' : 'text-white'} hover:text-blue-600 transition-colors duration-300 ease-in`}
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
      </nav>
    </>
  );
}

export default Navbar;
