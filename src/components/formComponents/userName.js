import useFormContext from "../../hooks/useFormContext";


const UserName = () => {
  const {data, handleChange} = useFormContext()
  const content = (
    <>
      <div className="header-place">
        <h3>Finally!</h3>
        <h4>How should we call you</h4>
      </div>
     
      <div className="form-content">
        <label htmlFor="wallet-name" className="label">
        Your Name
        </label>
       
        <input type="text" id="walletOwnerUserName" name="walletOwnerUserName" 
          className="input" pattern="([A-Z])[\w+.]{1,}" onChange={handleChange} 
          value={data.walletOwnerUserName} placeholder="username"/>       
      </div>
    </>
  )
  return content
}

export default UserName