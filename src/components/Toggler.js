import React, { useState } from 'react'; 
const Toggler = ({handleUnit}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked) ;
    handleUnit(); // Call your function to toggle the unit here.
  }

  return (
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center shadow-md rounded-full '>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        
        <div className='shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-full bg-white '>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-s-full bg-purple-100 ${
              !isChecked ? 'bg-primary text-white bg-gradient-to-tr from-purple-100 to-purple-500' : 'text-body-color'
            }`}
          >
           <span>°C</span>

          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-e-full  bg-purple-100  ${
              isChecked ? 'bg-primary text-white  bg-gradient-to-tr from-purple-100 to-purple-500' : 'text-body-color'
            }`}
          >
                        <span>°F</span>

          </span>

        </div>
      </label>
    </>
  )
}

export default Toggler
