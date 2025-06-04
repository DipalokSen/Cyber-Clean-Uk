import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      

       <Link href={"/"}>
       <div>


      
          <Image 
          width={46} 
          height={46} 
          src={"/images/logo.svg"} 
          alt="logo" 
          />


            </div>



          
        </Link>

        <div className='flex items-center gap-8'>
          <NavItems/>
          <p>Sign in</p>


        </div>

 
       
       
       
       
      




      
    </nav>
    
    
    
    </>
  )
}

export default Navbar
