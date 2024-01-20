import useFormContext from "../hooks/useFormContext";



const UserName = () => {
  const {data, handleChange} = useFormContext()
  const content = (
    <>
      <div className="header-text">
        <h3>Finally!</h3>
        <h4>How should we call you</h4>
      </div>
     
      <div>
        <label for="wallet-name" className="label">
        Username
        </label>
        <input type="text" id="wallet-name" onChange={handleChange} value={data.walletOwnerUserName} placeholder="username"/>
        <button type="submit">Complete Registration</button>
        <button type="submit">Go to my wallet</button>
      </div>
    </>
  )
  return content
}

export default UserName