'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SideNav = () => {
  const [linkActive, setLinkActive] = useState(0)
  const pathName = usePathname()

  useEffect(() => {
    switch (pathName) {
      case "/":
        setLinkActive(0)
        break
      case "/tanyajawab":
      case "/menjawab":
      case "/menjawab2":
      case "/menjawab3":
      case "/menjawab4":
        setLinkActive(1)
        break
      case "/postingan":
        setLinkActive(2)
        break
      case "/artikel":
      case "/artikel1":
      case "/artikel2":
      case "/artikel3":
        setLinkActive(3)
        break
      default:
        break
    }
  }, [pathName])

  const handleLinkClick = (id: React.SetStateAction<number>) => {
    setLinkActive(id);
  };

  const DATA = [
    {
      link: "/",
      class: "bg-secondarymain text-white",
      title: "Beranda",
      icon:'/asets/home-icon.png',
      Clicked:'/asets/home-iconClicked.png'
    },
    {
      link: "/tanyajawab",
      class: "bg-secondarymain text-white",
      title: "Tanya Jawab",
      icon:'/asets/forum-icon.png',
      Clicked:'/asets/forum-iconClicked.png'
    },
    {
      link: "/postingan",
      class: "bg-secondarymain text-white",
      title: "Postingan Islami",
      icon:'/asets/posting-icon.png',
      Clicked:'/asets/posting-iconClicked.png',
    },
    {
      link: "/artikel",
      class: "bg-secondarymain text-white",
      title: "Artikel",
      icon:'/asets/artikel-icon.png',
      Clicked:'/asets/artikel-iconClicked.png',
    },
  ]

  return (
      <div className='bg-white h-full w-64 md:w-80 px-4 md:px-4 pt-14 items-center flex-col fixed block'>
        <div className='justify-center items-center flex mb-12 cursor-default'>
          <img src="/asets/logo.png" className='w-8 h-8 mr-3 flex'/>
          <Link className='text-secondarymain text-xl md:text-2xl font-bold items-center' href='/'>Muslim Connect</Link>
        </div>
        <div className='flex-col flex gap-4 text-lg font-bold justify-center w-full'>
          {DATA.map((val, id) => (
            <div 
              key={id}  
              className={`${linkActive === id ? " bg-secondarymain text-white" : "hover:bg-abu duration-300"} w-full rounded-2xl h-14 items-center flex pl-5 font-bold`}
              onClick={() => handleLinkClick(id)}>
              <Link href={val.link} className='flex items-center w-full h-full'>
                <img 
                  src={linkActive === id ? val.Clicked : val.icon} 
                  className='w-6 h-6 flex mr-3' alt="" />
                <span>{val.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}

export default SideNav
