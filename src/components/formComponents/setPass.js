
import useFormContext from "../../hooks/useFormContext";


const PasswordSet = () => {
    const{ data, handleChange} = useFormContext()
  /*  const [formError, setFormError]=useState({
       passWord:"",
       confirmPass:"",
    })
    const handleInputError= e =>{
        e.preventDefault();
        let inputError ={
            passWord:"",
            confirmPass:"",

        }
        if(!data.passWord&&data.confirmPass){
            setFormError({
                ...inputError,
                passWord:"This should not be empty",
                confirmPass:"This should not be empty"
            })
            return
        }
        if(data.passWord!==data.confirmPass){
            setFormError({
                ...inputError,
                confirmPass:"Password and the confirm password should be an exact match"
            })
            return
        }
        if(!data.passWord){
            setFormError({
                ...inputError,
                passWord:"Please input a password for your account"
            })
            return
        }
        setFormError(inputError);

    }*/
    const content =(
        <div className="form-content">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="passWord" name="passWord" value={data.passWord} onChange={handleChange} placeholder="password"/>
           {/* <p className="error-message">{formError.passWord}</p>*/}
            <label htmlFor="confirmPass" className="label">Confirm password</label>
            <input type="password" id="confirmPass" name="confirmPass" value={data.confirmPass} onChange={handleChange} placeholder="password"/>
           {/* <p className="error-message">{formError.confirmPass}</p>*/}
          
        </div>
    )

    return content
}
export default PasswordSet