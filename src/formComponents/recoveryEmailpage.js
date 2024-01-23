import useFormContext from "../hooks/useFormContext"
import '../styles/form.css'

const RecoveryEmail = () => {
  const{ data, handleChange}= useFormContext()
  const content = (
    <div className="form-content">      
        <p>Add 2 emails or mobile number that you trust for combined recovery access if you forget your password</p>
        <div className="input-section">
          <label for="email-one" className="label"> First Email address</label>
          <div className="input-box">
            <input type="text" id="email-one" className= "input" value={data.recoveryEmail1} onChange={handleChange} placeholder="Email@email.com"/>
          </div>
          <label for="email-two" className="label"> First Email address</label>
          <div className="input-box">
            <input type="text" id="email-two" className="input" value={data.recoveryEmail2} onChange={handleChange} placeholder="Email@email.com"/>
        
          </div>
        </div>
    </div>
  )
  return content
}

export default RecoveryEmail