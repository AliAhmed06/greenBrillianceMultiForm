import { useRef, useState } from "react";
import PhoneNumberInput from "./ValidationComponents/PhoneNumberInput";

const Step10 = ({ formData, handleChangeInput, handleSubmitFormData, handlePrevStep }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phone, setPhone] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  
  const [phoneNumber, setPhoneNumber] = useState(formData.phone);
  const [isValid, setIsValid] = useState(true); // Track phone number validation
  const inputRef = useRef(null);

  // -------------------------------------------------------------------------------------------------------
  // phone logic starts
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Remove any non-digit characters from the input
    const formattedPhoneNumber = inputValue.replace(/\D/g, '');
    const formattedDisplay = formatPhoneNumber(formattedPhoneNumber);

    // Check if the phone number is valid (customize this validation as needed)
    const isValidPhoneNumber = formattedPhoneNumber.length === 10; // Example: 10 digits required

    setPhoneNumber(formattedDisplay);
    setIsValid(isValidPhoneNumber);
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 0) {
      return '';
    }

    let formattedDisplay = '';

    if (phoneNumber.length >= 3) {
      formattedDisplay = `(${phoneNumber.slice(0, 3)}`;
    } else {
      formattedDisplay = `(${phoneNumber}`;
    }

    if (phoneNumber.length >= 6) {
      formattedDisplay += `) ${phoneNumber.slice(3, 6)}`;
    } else if (phoneNumber.length > 3) {
      formattedDisplay += `) ${phoneNumber.slice(3)}`;
    }

    if (phoneNumber.length >= 10) {
      formattedDisplay += `-${phoneNumber.slice(6, 10)}`;
    } else if (phoneNumber.length > 6) {
      formattedDisplay += `-${phoneNumber.slice(6)}`;
    }

    return formattedDisplay;
  };

  const handleKeyDown = (e) => {
    // Capture the cursor position before a backspace action
    if (e.key === 'Backspace' && inputRef.current) {
      const selectionStart = inputRef.current.selectionStart;
      const selectionEnd = inputRef.current.selectionEnd;

      // If the cursor is at the beginning of a group (e.g., before '(', ')', or '-'),
      // move the cursor left by one position
      if (selectionStart === selectionEnd) {
        const value = inputRef.current.value;
        if (value[selectionStart - 1] === '(' || value[selectionStart - 1] === ')' || value[selectionStart - 1] === '-') {
          inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
        }
      }
    }
  };

  // phone logic ends
  // -------------------------------------------------------------------------------------------------------

  const Step10Handler = () => {
      // console.log(`f = ${formData.first_name} and l = ${formData.last_name} and ph = ${formData.phone}`);
      if(formData.first_name === ""){
        setFirstNameError("first name is required")
      }
      else{
        setFirstNameError("")
      }
      
      if(formData.last_name === ""){
        setLastNameError("last name is required");
      }
      else{
        setLastNameError("");
      }

      if(phoneNumber === ""){
        setPhoneError("phone is required");
      }
      else if(phoneNumber.length !== 14){
        setPhoneError("Phone Format is not correct");
      }
      else{
        setPhoneError("");
        handleChangeInput("phone", phoneNumber)
      }

      if(formData.firstName !== "" && formData.lastName !== "" && formData.phone !== ""){
        handleSubmitFormData();    
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
        type="text"  
        placeholder="First Name"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.firstName}
        onChange={(e) => handleChangeInput("first_name", e.target.value) }
        />
        { firstNameError !== "" && <p className="text-red-500 font-semibold">{firstNameError}</p> }
      <input 
        type="text"  
        placeholder="Last Name"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.lastName}
        onChange={(e) => handleChangeInput("last_name", e.target.value) }
        />
        { lastNameError !== "" && <p className="text-red-500 font-semibold">{lastNameError}</p> }
      
      {/* phone starts */}
      <input
        type="text"
        placeholder="(123) 456-7890"
        className="w-[320px] md:w-[500px] stepField"
        // value={formData.phone}
        // onChange={(e) => handleChangeInput("phone", e.target.value) }
        value={phoneNumber}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        // className={!isValid ? 'error' : ''}
      />
      { phoneError !== "" && <p className="text-red-500 font-semibold">{phoneError}</p> }
      {/* phone ends */}
      {/* <PhoneNumberInput formData = {formData} handleChangeInput={handleChangeInput} /> */}
      {/* <input 
        type="number"  
        placeholder="Phone Number"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.phone}
        onChange={(e) => handleChangeInput("phone", e.target.value) }
        />
         */}
      <button
        className="w-[320px] md:w-[500px] stepButton2"
        onClick={ () => Step10Handler() }        
        // onClick={handleSubmitFormData}
        >GET YOUR SOLAR QUOTE</button>
        
        <button
          className='px-4 py-2 underline text-white'
          
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step10;
