import useFormContext from "../hooks/useFormContext";
import '../styles/form.css'


const PasswordSet = () => {
    const{ data, handleChange} = useFormContext()
    const content =(
        <div className="header-place">
            <label for="password" className="label">Password</label>
            <div className="input-box">
                <input type="password" id="password" className="input" value={data.passWord} onChange={handleChange} placeholder="password"/>
            </div>
          
        </div>
    )

    return content
}
export default PasswordSet