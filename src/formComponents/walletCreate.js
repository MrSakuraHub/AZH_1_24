import useFormContext from "../hooks/useFormContext"
import email from "../resources/mail-outline.svg"
import '../styles/create.css'


const WalletCreate = () => {
  const {data, handleChange} = useFormContext()
  const content =(
    <>
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
    
        <img src={email} alt="" className="icons"/>
        </div>
       

        <p>Already a user? <a href="/login">Log in instead</a></p>
      </>
  )
    return content
}

export default WalletCreate