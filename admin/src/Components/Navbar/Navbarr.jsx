import React from 'react'
import uc_logo from '../../assets/UC_logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbarr = () => {
  return (
    <div className=' flex items-center justify-between pt-[10px] pl-[60px] pr-[60px] shadow-lg mb-[1px] bg-white'>
      <img src={uc_logo} alt='' className=' h-20'/>
      <img src={navProfile} alt='' className=' h-15 w-[75px]'/>
    </div>
  )
}

export default Navbarr
