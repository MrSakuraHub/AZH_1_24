import { useState } from "react"
import '../styles/create.css'
export default function Form(){
    const [emailOrMobile,setEmailOrMobile]= useState({
        userEmail:""
    });
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(JSON.stringify(emailOrMobile))
    }
    
    return(
        <div className="wallet-form">
            <h2>Create a wallet</h2> 
                 
                <form onSubmit={handleSubmit} >
                    <label For="emailOrMobile" className="label">
                    Email or mobile number
                    <input 
                        type="text" 
                        id="emailOrMobile" 
                        value={emailOrMobile} 
                        onChange={(e) => setEmailOrMobile(e.target.value)} 
                        placeholder="Email@email.com"
                    />
                    </label>
                    <button type="submit">Create wallet</button>
                </form>
                <p>Already a user? <a href="/login">Log in instead</a></p>
            </div>
        
    )
}

