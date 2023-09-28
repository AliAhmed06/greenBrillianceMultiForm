"use client";
import React, { useState } from 'react';
import SimpleMultiStepForm from './components/SimpleMultiStepForm';
import SingleStepForm from './components/SingleStepForm';
import StepFinal from './components/StepFinal';


const Page = () => {
  const [zip, setZip] = useState("");
  const [showForm, setShowForm] = useState(true);
  

  
  // console.log(`zip = ${zip} and zip length = ${zip.length} and show form = ${showForm}`)
  // const showFormHandler = () => {
  //   if(zip.length === 5){
  //     setShowForm(true);
  //   }
  //   else{
  //     setShowForm(false);
  //   }
  // }

  return (
    <div className='min-h-screen font-Sagoe'>      
      <SimpleMultiStepForm showStepNumber={true} />

      {/* { showForm === true ? <SingleStepForm setShowForm={setShowForm} /> : <StepFinal /> }  */}
      

      <div className='mt-10'>
        
        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl'>
          <h3 className='font-bold text-4xl text-[#0E9B49] text-center lg:text-start font-Teko '>HOW MUCH DOES SOLAR COST?</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>Many solar companies might use enticing words like <span className='font-bold'>Free</span> to grab your attention. However, the reality is that solar is not free. There is a cost to going solar. But, for those who are a good fit, the advantages of solar energy can surpass its costs, straightforwardly. Enhancing the appeal of solar are the numerous incentives from the Federal Government and several states, including tax breaks and rebates, aiming to make your switch economically beneficial. Remember, nothing in life is truly free.</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo4.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl mt-10'>
          <h3 className='font-bold text-4xl text-[#0E9B49] text-center lg:text-start font-Teko'>IS YOUR ROOF READY FOR PANELS?</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>Think of solar panels as a long-haul commitment. Given this long-term perspective, it is crucial to ensure your roof is relatively new and robust. It would not be wise to invest in solar panels today and then need to take them down in a couple of years for roof repairs or replacement. If your roof is nearing or past the 15-year mark, it might be wise to consider a roof replacement beforehand. Fortunately, many leading solar firms offer both roof replacement and expert solar installation services.</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo5.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl mt-10'>
          <h3 className='font-bold text-4xl text-[#0E9B49] text-center lg:text-start font-Teko'>WHAT IS THE STATE OF YOUR CREDIT?</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>As reiterated, solar does not come without a price. A typical rooftop solar setup may range from $10,000 to $30,000. This is why a majority of homeowners opt for financing over a span of 10 to 20 years. To benefit from the best financing rates, you should have a solid credit score. Typically, a score of 640 or above is recommended.</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo6.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl mt-10'>
          <h3 className='font-bold text-4xl text-[#0E9B49] text-center lg:text-start font-Teko'>FEDERAL TAX CREDITS & MORE BENEFITS</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>The Federal Government is undoubtedly encouraging the shift to cleaner energy sources. To push this transition, they are offering a 30% TAX CREDIT. Think of this as a 30% price cut on your solar installation. Plus, depending on your locality, there might be other state or local incentives at your disposal. We will delve deeper into these when we discuss further!</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo7.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-10 p-10'>
          <img src="/images/logo8.png" alt="" className='h-[120px]' />
          <p className='text-4xl text-white font-Teko font-bold mt-5 text-center'>4 SIMPLE STEPS TO RECEIVE YOUR <br /> FREE SOLAR CONSULTATION</p>
        </div>

        <div className='w-[80%] max-w-[1100px] mx-auto'>
          <div className='bg-white  py-10 px-10 rounded-xl mt-10 flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#F26539]'>1</span>
            <div>
              <h3 className='font-bold text-4xl text-[#0E9B49] text-start font-Teko'>PROVIDE YOUR ZIP CODE</h3>
              <p className='mt-5 text-lg'>This helps us identify top solar installers in your vicinity and inform you about the available incentives and credits.</p>
            </div>
          </div>
          <img src="/images/seperator.png" alt="" className='ml-[60px] h-[70px]' />
          
          <div className='bg-white py-10 px-10 rounded-xl flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#F26539]'>2</span>
            <div>
              <h3 className='font-bold text-4xl text-[#0E9B49] text-start font-Teko'>SHARE YOUR MONTHLY ELECTRICITY BILL</h3>
              <p className='mt-5 text-lg'>This crucial information aids in assessing whether transitioning to solar is a wise choice for you.</p>
            </div>
          </div>
          <img src="/images/seperator.png" alt="" className='ml-[60px] h-[70px]' />

          <div className='bg-white py-10 px-10 rounded-xl flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#F26539]'>3</span>
            <div>
              <h3 className='font-bold text-4xl text-[#0E9B49] text-start font-Teko'>MENTION YOUR UTILITY SERVICE PROVIDER</h3>
              <p className='mt-5 text-lg'>By knowing your current provider, we can gauge the price you pay per kWh. This is vital to determine the feasibility of your shift to solar.</p>
            </div>
          </div>
          <img src="/images/seperator.png" alt="" className='ml-[60px] h-[70px]' />

          <div className='bg-white py-10 px-10 rounded-xl flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#F26539]'>4</span>
            <div>
              <h3 className='font-bold text-4xl text-[#0E9B49] text-start font-Teko'>DESCRIBE YOUR ROOF&apos;S SHADING</h3>
              <p className='mt-5 text-lg'>This insight helps us estimate the sunlight exposure your roof gets daily, ensuring we connect you with the most suitable solar company.</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-5 mb-20'>          
          <a href="/" className='stepButton0 text-center font-Teko '>SEE IF YOU QUALIFY</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
