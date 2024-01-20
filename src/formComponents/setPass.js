import useFormContext from "../hooks/useFormContext";
import '../styles/secure.css'


const PasswordSet = () => {
    const{ data, handleChange} = useFormContext()
    const content =(
        <div className="input-section">
            <label for="password" className="label">Password</label>
            <input type="password" id="password" value={data.passWord} onChange={handleChange} placeholder="password"/>
        </div>
    )

    return content
}
export default PasswordSet