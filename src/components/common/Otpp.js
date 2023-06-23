import React, { useState, useRef } from 'react';

const OtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (event, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = event.target.value;
    setOtp(updatedOtp);

    // Focus on the next input field
    if (event.target.value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    // Perform further actions with the OTP, such as verification or processing
  };

  return (
    <div>
      <h2>OTP Form</h2>
      <form className='otp_box' onSubmit={handleSubmit}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            value={digit}
            onChange={(event) => handleChange(event, index)}
            maxLength={1}
            style={{ width: '30px', marginRight: '5px' }}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OtpForm;
