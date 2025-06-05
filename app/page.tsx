import CompanionCard from '@/Components/CompanionCard'
import CompanionList from '@/Components/CompanionList'
import Cta from '@/Components/Cta'
import React from 'react'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <>
    
   
    <main>
  
      <h1>Dashboard</h1>

      <section className='home-section'>
          <CompanionCard
          
          id="556"
          name="neura the brainy exploler"
          topic="neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"

          
          
          
          />
          <CompanionCard
          id="557"
          name="neura the brainy exploler"
          topic="neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"

          
          
          
          />
          <CompanionCard
          id="558"
          name="neura the brainy exploler"
          topic="neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"

          
          
          
          />

      </section>

      <section className='home-section'>
         <CompanionList 
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
         />
      </section>

      <section className='home-section'>
       <Cta/>
      </section>
    </main>
     </>
  )
}

export default Page