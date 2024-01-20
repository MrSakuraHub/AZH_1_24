import useFormContext from '../hooks/useFormContext'
import FormInputs from './FormInputs'
import '../styles/create.css'
export default function Form(){
    const{
        page,
        setPage,
        data,
        title,
        canSubmit
    } = useFormContext()
    const handlePrev=() => setPage(prev => prev -1)
    const handleNext=()=>setPage(prev => prev+1)
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(JSON.stringify(emailOrMobile))
    }
    const content =(
        <form onSubmit={handleSubmit} className='wallet-form'>
            <header>
             <h2>{title[page]}</h2>
             <div className='Button-container'>
                 <button type='submit' className='form-button' disabled={!canSubmit}>
             </div>
            
            </header>
            <FormInputs/>
        </form>
    )
    
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

