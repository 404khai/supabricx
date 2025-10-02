import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-30 bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className='flex justify-center items-center h-full w-60 bg-amber-200'>
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <p className='text-2xl'>Supabricx</p>
        </div>
        

        <div className="flex justify-evenly items-center h-full w-100 bg-white/70 backdrop-blur-md border border-white/10 rounded-[30px] shadow-lg">
          <p>Product</p>
          <p>Docs</p>
          <p>APIs</p>
        </div>

        
        <div className='flex justify-center items-center h-full w-100 bg-amber-200'>
            
        </div>
    </nav>
  )
}

export default Navbar