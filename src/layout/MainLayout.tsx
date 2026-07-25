import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-background overflow-x-hidden font-inter text-muted-foreground'>
        <Header />
        <main className='flex-1'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout