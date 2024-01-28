import useFormContext from "../../hooks/useFormContext";


const PasswordSet = () => {
    const{ data, handleChange} = useFormContext()
    const content =(
        <div className="form-content">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="passWord" name="passWord" value={data.passWord} onChange={handleChange} placeholder="password"/>
            <label htmlFor="confirmPass" className="label">Confirm password</label>
            <input type="password" id="confirmPass" name="confirmPass" value={data.passWord} onChange={handleChange} placeholder="password"/>
           
          
        </div>
    )

    return content
}
export default PasswordSet