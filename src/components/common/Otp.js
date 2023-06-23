import React, { useState } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted OTP:', otp);
    // Perform further actions with the OTP, such as verification or processing
  };

  return (
    <div>
      <h2>OTP Form</h2>
      <form className='otp_box' onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          maxLength={6}
          placeholder="Enter OTP"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Otp;
