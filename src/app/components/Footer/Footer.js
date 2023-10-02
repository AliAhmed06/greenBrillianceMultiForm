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
            <p>Homes and businesses, both big and small, in Washington DC, Maryland, Virginia and Pennsylvania have trusted GreenBrilliance to go solar. Building end-to-end &apos;Made in USA&apos; solar systems in-house, from design and engineering to permitting to installation, monitoring and maintenance, we&apos;ve done things differently: ensuring true turnkey delivery. <br/> Eliminating the inefficiency of outsourced contractors. Refusing poor service. Contradicting expensive systems. We&apos;ve delivered superior quality systems, state-of-the-art technology and cost-savings in every installation. </p>
            <div className='flex gap-3 mt-5'>
                <Link href={"https://www.facebook.com/greenbrilliance"} target='_blank'><img src="/images/facebook.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                {/* <Link href={"#"}><img src="/images/twitter.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link> */}
                <Link href={"https://www.instagram.com/greenbrilliance"} target='_blank'><img src="/images/instagram.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link>
                {/* <Link href={"#"}><img src="/images/youtube.png" alt="" className='h-[25px] w-[25px] object-contain' /></Link> */}
            </div>
        </div>

        {/* <div className=''>
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
            </div>
        </div> */}

        <div className=''>
            <div className='text-4xl font-extrabold flex flex-col items-center w-fit gap-1 mb-5'>
                <h2 className='text-[#0E9B49] font-Teko'>Contact Us</h2>
                <div className='bg-[#F26539] h-[2px] w-[60px]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <span>703-660-4767</span>
                <span>irtiza@greenbrilliance.com</span>
                <span>13655 Dulles Technology Drive, Suite 130 Herndon, VA 20171</span>
            </div>
        </div>
    </div>
  )
}

export default Footer