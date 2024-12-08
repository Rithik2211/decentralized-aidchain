
import React  from 'react';
import { useRouter } from 'next/navigation';
import NavButton from '@/app/utils/NavButton';
import Image from 'next/image';


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
      name : "Organizations",
      route : "/screens/dashboard"
    },
    {
      name : "Aid Generation",
      route : "/screens/ReliefGenerationForm"
    }
  ]

  return (
    <nav className="text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center px-7">
      <div className="flex items-center cursor-pointer" onClick={() => handleClick('/')}>
      <Image
        src="/Rescue_Chain_trans.png"
        alt="Rescue Chain Logo" 
        width={60}
        height={60}
        className="mr-2"
      />
      <div className="text-2xl font-bold">
        Rescue Chain
      </div>
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
        <NavButton name='Donate With Us!' className='rounded-full px-6 py-2 text-sm font-semibold dark:text-white text-black bg-[#109feb] hover:bg-[#109feb]-500' route='/screens/loginPage' />
      </div>
    </nav>
  )
}

export default NavBar