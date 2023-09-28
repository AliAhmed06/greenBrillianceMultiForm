import { useState } from "react";

const Step6 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const [error, setError] = useState("");
  
  const Step6Handler = (val) => {
    let whySolar = [];
    document.querySelectorAll('input[name="whySolary"]:checked').forEach( function(e) {
      whySolar.push(e.value);
    });    

    if(whySolar.length === 0){
      setError("You have to select atleast 1 field");
    }
    else{
      handleChangeInput("why_solar", whySolar);      
      handleNextStep();
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[40%]">
        <img src="/images/step6.png" alt="" className="lg:mt-20" />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[60%]">
        <h1 className='font-bold text-3xl text-white px-8 md:px-0'>
          Why Are You Considering Going Solar?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white mb-5 px-8 md:px-0">Modifications/expansions of existing solar systems must be handled by the original installer</p>              
          <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start rounded-t-xl text-[#0E9B49] font-semibold">
            <input 
              defaultChecked={formData.why_solar[0] === "Save On Electricity Bills" ? true : false}
              type="checkbox" 
              name="whySolary" 
              className="accent-[#F26539] focus:ring-[#F26539] w-4 h-4" 
              value="Save On Electricity Bills"
              id="v1"
              />
              
            <label htmlFor="v1">Save On Electricity Bills</label>
          </div>

          <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start text-[#0E9B49] font-semibold">
            <input 
              defaultChecked={formData.why_solar[1] === "Earn Tax Credits and Rebates" ? true : false}
              type="checkbox" 
              name="whySolary" 
              className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
              value="Earn Tax Credits and Rebates"
              id="v2"
              />
            <label htmlFor="v2">Earn Tax Credits and Rebates</label>
          </div>

          <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start text-[#0E9B49] font-semibold">
            <input 
              defaultChecked={formData.why_solar[2] === "Do My Part to Save The Environment" ? true : false}
              type="checkbox" 
              name="whySolary" 
              className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
              value="Do My Part to Save The Environment"
              id="v3"
              />
            <label htmlFor="v3">Do My Part to Save The Environment</label>
          </div>

          <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start text-[#0E9B49] font-semibold rounded-b-xl">
            <input 
              defaultChecked={formData.why_solar[3] === "I Want to Replace My Current System" ? true : false}
              type="checkbox" 
              name="whySolary" 
              className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
              value="I Want to Replace My Current System"
              id="v4"
              />
            <label htmlFor="v4">I Want to Replace My Current System</label>            
          </div>

          { error !== "" && <p className="text-red-500 font-semibold">{error}</p> }
          <button
            className='stepButton2 w-[320px] md:w-[450px]'
            onClick={Step6Handler}
          >
            Next
          </button>  

          <button
            className='px-4 py-2 rounded-xl mt-5 text-white underline font-semibold'
            onClick={handlePrevStep}
          >
            Go Back
          </button>
      </div>
    </div>
  );
};

export default Step6;
