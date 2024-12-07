import React from 'react';
import { useRouter } from 'next/navigation';
import NavButton from '@/app/utils/NavButton';


const NavBar = () => {
  const router = useRouter()
  const handleClick = (route: string) => {
      router.push(route)
  }

  const NavItems = [
    {
      name : "Donate",
      route : "/screens/donate"
    },
    {
      name : "Request Aid",
      route : "/screens/dashboard"
    },
    {
      name : "Volunteer",
      route : "/screens/verification"
    }
  ]

  return (
    <nav className="text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center px-7">
        <div className="text-2xl font-bold" onClick={() => handleClick('/')}>
          EmergencyAid
        </div>
        <div className="flex flex-row justify-center text-center space-x-7 mx-3">
          {
            NavItems?.map((items, index)=>{
              return(
                <div 
                  key={index} 
                  className="hover:text-blue-200 font-bold"
                  onClick={() => handleClick(items.route)}
                >
                    {items.name}
                </div>
              )
            })
          }
        </div>
        <NavButton name='Donate With Us!' className='rounded-full px-6 py-2 text-sm font-semibold dark:text-white text-black bg-[#109feb] hover:bg-[#109feb]-500' route='/Login' />
      </div>
    </nav>
  )
}

export default NavBar