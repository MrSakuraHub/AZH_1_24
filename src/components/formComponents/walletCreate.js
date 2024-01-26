import useFormContext from "../../hooks/useFormContext"


const WalletCreate = () => {
  const {data, handleChange} = useFormContext()
  const content =(
    <div className="form-content">
       <div className="input-section">
          <label htmlFor="emailOrMobile" className="label">
            Email or mobile number
          </label>
          
            <input 
              type="email" 
              id="ownerEmail" 
              name="ownerEmail"
              value={data.ownerEmail} 
              onChange={handleChange} 
              className="input"
              pattern="([A-Z])[\w+.]{1,}"
              placeholder="Email@email.com"
          />
          <p>Already a user? <a href="/login">Log in instead</a></p>
        </div>
      </div>
  )
    return content
}

export default WalletCreate