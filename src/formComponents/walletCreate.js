import useFormContext from "../hooks/useFormContext"

import '../styles/form.css'


const WalletCreate = () => {
  const {data, handleChange} = useFormContext()
  const content =(
    <div className="form-content">
       <div className="input-section">
          <label htmlFor="emailOrMobile" className="label">
            Email or mobile number
          </label>
          <div className="input-box">
            <input 
              type="email" 
              id="emailOrMobile" 
              name="emailOrMobile"
              value={data.ownerEmail} 
              onChange={handleChange} 
              className="input"
              pattern="([A-Z])[\w+.]{1,}"
              placeholder="Email@email.com"
          />
          </div>
          <p>Already a user? <a href="/login">Log in instead</a></p>
        </div>
      </div>
  )
    return content
}

export default WalletCreate