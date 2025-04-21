import About from '@/components/About'
import { Campaigns } from '@/components/Campaigns'
import Carusel from '@/components/Carusel'
import Customers from '@/components/Customers'
import Reservasion from '@/components/Reservasion'
import MenuWrappers from '@/components/products/meniwrapper'
import React from 'react'

const Index = ({categoryList}) => {
  console.log(categoryList, 'categoryList')
  return (
    <>
            <Carusel/>
            <Campaigns/>
            <MenuWrappers categoryList={categoryList}/>
            <About/>
            <Reservasion/>
            <Customers/>
    </>
  )
}

export default Index