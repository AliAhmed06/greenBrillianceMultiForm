import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 py-10 lg:px-28 lg:py-20 gap-10'>
        <div className='lg:col-span-2 lg:px-10'>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#0E9B49] font-Teko'>About Us</h2>
                <div className='bg-[#F26539] h-[2px] w-[60px]'></div>
            </div>
            <p>greenbrilliance exists to serve homeowners who are looking to reduce the cost of powering their homes, but are unsure where to start their research. We have done the hard work for you by partnering with the top solar companies in your area. Then by answering just a few questions, we will match you with the solar companies that are the best fit for you. We give you the control to make smart, informed decisions that will make going solar a gratifying experience.</p>
            <div className='flex gap-3 mt-5'>
                <Link href={"https://www.facebook.com/greenbrilliance"} target='_blank'><img src="/images/facebook.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                {/* <Link href={"#"}><img src="/images/twitter.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link> */}
                <Link href={"https://www.instagram.com/greenbrilliance"} target='_blank'><img src="/images/instagram.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                {/* <Link href={"#"}><img src="/images/youtube.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link> */}
            </div>
        </div>

        <div className=''>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#0E9B49] font-Teko'>Legal</h2>
                <div className='bg-[#F26539] h-[2px] w-[60px]'></div>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
                <Link href={"/policy"} className='flex items-center justify-start gap-3'>                    
                    <img src="/images/footer-arrow.png" alt="" className='h-[20px]' />
                    <span className='font-bold text-lg'>Privacy Policy</span>
                </Link>
                <Link href={"/terms"} className='flex items-center justify-start gap-3'>                    
                    <img src="/images/footer-arrow.png" alt="" className='h-[20px]' />
                    <span className='font-bold text-lg'>Terms of Services</span>
                </Link>
                {/* <Link href={"#"} className='flex items-center justify-start gap-3'>                    
                    <img src="/images/footer-arrow.png" alt="" className='h-[20px]' />
                    <span className='font-bold text-lg'>CCPA</span>
                </Link>                 */}
            </div>
        </div>

        <div className=''>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#0E9B49] font-Teko'>Contact Us</h2>
                <div className='bg-[#F26539] h-[2px] w-[60px]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <span>+1 757-559-1931</span>
                <span>admin@greenbrilliance.org</span>
                <span>21110 Brookside ln, Sterling , VA, 20165</span>
            </div>
        </div>
    </div>
  )
}

export default Footer