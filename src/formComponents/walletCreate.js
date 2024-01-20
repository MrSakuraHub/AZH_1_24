import useFormContext from "../hooks/useFormContext"
import '../styles/create.css'

const WalletCreate = () => {
  const {data, handleChange} = useFormContext()
  const content =(
    <div>
        <label For="emailOrMobile" className="label">
          Email or mobile number
        </label>
        <input 
            type="text" 
            id="emailOrMobile" 
            value={data.walletOwnerEmail} 
            onChange={handleChange} 
            placeholder="Email@email.com"
        />
      
        <button type="submit">Create wallet</button>
        <p>Already a user? <a href="/login">Log in instead</a></p>
      </div>
  )
    return content
}

export default WalletCreate