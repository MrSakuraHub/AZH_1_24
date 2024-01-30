import useFormContext from "../../hooks/useFormContext";

import React, { useState } from 'react'

const RecoveryOtp = ({length=6 }) => {
    const{ data, handleChange}= useFormContext()
    const{otp,setOtp}=useState(new Array(length).fill(""))
    const content =(
       
            <div className="form-content">
                <p>Check into the email inbox of {data.recoveryEmail1} and add the code below.</p>
                <label htmlFor="recoveryEmail1OTP" className="label"> Recovery Code</label>
            </div>
        
    )

    
  return content
}

export default RecoveryOtp