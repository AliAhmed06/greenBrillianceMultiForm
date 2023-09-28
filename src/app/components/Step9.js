import { useState } from "react";

const Step9 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  // const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  const Step9Handler = (val) => {
      if(formData.email === ""){
        setEmailError("Email is required")
      }
      else if(!formData.email.match(validRegex)){
        setEmailError("Email is not correct")
      }
      else{        
        handleNextStep();    
      }
  }

  // console.log(address.length);
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-white font-bold text-3xl lg:text-6xl uppercase mt-10">Congratulations <br /> you pre-qualify!</h3>

      <h3 className='mt-10 font-bold text-white text-3xl'>
        Where Should We Send Your Quote(S)?
      </h3>      
      
      <input 
        type="email"  
        placeholder="Email"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.email}
        onChange={(e) => handleChangeInput("email", e.target.value)  }
        />
        { emailError !== "" && <p className="text-[#F26539] font-semibold">{emailError}</p> }
      <button
        className="w-[320px] md:w-[500px] stepButton2"
        onClick={ () => Step9Handler() }
        // disabled={email.length > 0 ? false : true}
        >GET YOUR SOLAR QUOTE</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-white underline font-semibold'
          
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step9;
