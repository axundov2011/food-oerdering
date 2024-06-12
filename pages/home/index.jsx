import About from '@/components/About'
import { Campaigns } from '@/components/Campaigns'
import Carusel from '@/components/Carusel'
import Customers from '@/components/Customers'
import Reservasion from '@/components/Reservasion'
import MenuWrappers from '@/components/products/MenuWrappers'
import React from 'react'

const Index = () => {
  return (
    <>
            <Carusel/>
            <Campaigns/>
            <MenuWrappers/>
            <About/>
            <Reservasion/>
            <Customers/>
    </>
  )
}

export default Index