import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

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
          <SignedOut>
            <div className='flex items-center gap-4'>
              <SignInButton />
              
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

 
       
       
       
       
      




      
    </nav>
    
    
    
    </>
  )
}

export default Navbar
