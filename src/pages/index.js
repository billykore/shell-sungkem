import React, { useState } from 'react'
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
    </>
  )
}
