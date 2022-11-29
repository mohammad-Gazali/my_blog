import React from 'react'
import AsideNavDashBoard from '../components/AsideNavDashBoard'
import NavDashBoard from '../components/NavDashBoard'

const Dashboard = () => {
  return (
    <section className='h-screen relative overflow-hidden'>
        <NavDashBoard />
        <div className='flex px-4 gap-2 mt-2 h-[500px]'>
            <AsideNavDashBoard />
            <div className='bg-mylightblue/20 grow rounded-xl'></div>
        </div>
    </section>
  )
}

export default Dashboard