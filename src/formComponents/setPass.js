import useFormContext from "../hooks/useFormContext";


const PasswordSet = () => {
    const{ data, handleChange} = useFormContext()
    const content =(
        <div>
            <label for="password" className="label">Password</label>
            <input type="password" id="password" value={data.password} onChange={handleChange} placeholder="password"/>
            /*another field to repeat password to confirm*/
            <button type="submit">Confirm Password</button>
        </div>
    )

    return content
}
export default PasswordSet