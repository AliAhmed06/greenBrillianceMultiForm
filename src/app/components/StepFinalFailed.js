import React from 'react'


const StepFinalFailed = () => {
  return (
    <div className='bg-white h-[500px] text-center flex flex-col items-center justify-center mt-10'>
      <h3 className='text-4xl font-bold w-[60%]'>Sorry, but you must be a homeowner to qualify for this program!</h3>
      <a href="/" className='bg-[#F26539] text-white rounded-md py-5 px-10 hover:bg-opacity-80 mt-10 font-semibold'>CONTINUE</a>
    </div>
  )
}

export default StepFinalFailed