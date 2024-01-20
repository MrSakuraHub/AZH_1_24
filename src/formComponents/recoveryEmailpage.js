import useFormContext from "../hooks/useFormContext"

const RecoveryEmail = () => {
  const{ data, handleChange}= useFormContext()
  const content = (
    <div>
      <p>Add 2 emails or mobile number that you trust for combined recovery access if you forget your password</p>
      <label for="email-one" className="label"> First Email address</label>
      <input type="text" id="email-one" value={data.recoveryEmail1} onChange={handleChange} placeholder="Email@email.com"/>
      <label for="email-two" className="label"> First Email address</label>
      <input type="text" id="email-two" value={data.recoveryEmail2} onChange={handleChange} placeholder="Email@email.com"/>
      <button type="submit">Submit Emails</button>
    </div>
  )
  return content
}

export default RecoveryEmail