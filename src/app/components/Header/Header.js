import React from 'react'

const Header = () => {
  return (
    <div className='bg-white flex flex-col md:flex-row items-center justify-between py-5 px-5 lg:px-20'>
        <a href="/"><img src="/images/logo.png" alt="" className='w-[240px]  object-contain' /></a>
        <div className='md:flex items-center justify-center gap-3 hidden'>
          {/* <p className='text-xl text-[#F4BC33]'>+1 757-559-1931</p> */}
          <img src="/images/trusted-form.png" alt="" className='w-[200px] object-contain' />
        </div>
    </div>
  )
}

export default Header