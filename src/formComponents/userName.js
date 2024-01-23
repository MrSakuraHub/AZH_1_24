import useFormContext from "../hooks/useFormContext";
import '../styles/form.css'




const UserName = () => {
  const {data, handleChange} = useFormContext()
  const content = (
    <>
      <div className="header-place">
        <h3>Finally!</h3>
        <h4>How should we call you</h4>
      </div>
     
      <div className="container">
        <label for="wallet-name" className="label">
        Your Name
        </label>
        <div className="input-box">
          <input type="text" id="wallet-name" className="input" onChange={handleChange} value={data.walletOwnerUserName} placeholder="username"/>
        </div>
       
      </div>
    </>
  )
  return content
}

export default UserName