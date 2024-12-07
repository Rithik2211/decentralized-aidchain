'use client';
import React from 'react';
import { useRouter } from 'next/navigation'

interface NavButtonProps {
    name : string
    className? : string
    route : string
}

const NavButton = ({name, className, route }: NavButtonProps) => {
    const router = useRouter()
    const handleClick = (route: string) => {
        router.push(route)
    }
  return (
    <>
        <button onClick={() => handleClick(route)} className={className}>{name}</button>
    </>
  )
}

export default NavButton