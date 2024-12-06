// import React from 'react'

// const NavigationBar = () => {
//   return (
//     <div>NavigationBar</div>
//   )
// }

// export default NavigationBar

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          EmergencyAid
        </Link>
        <div className="space-x-4">
          <Link href="/donate" className="hover:text-blue-200">Donate</Link>
          <Link href="/request-aid" className="hover:text-blue-200">Request Aid</Link>
          <Link href="/volunteer" className="hover:text-blue-200">Volunteer</Link>
        </div>
      </div>
    </nav>
  )
}