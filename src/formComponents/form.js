import useFormContext from '../hooks/useFormContext'
import FormInputs from './FormInputs'

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
        console.log(JSON.stringify(data))
    }
    const content =(
        <form onSubmit={handleSubmit} className='wallet-form'>
            <header>
             <h2>{title[page]}</h2>
             <div className='Button-container'>
                 <button type='submit' className='form-button' disabled={!canSubmit}></button>
             </div>
            
            </header>
            <FormInputs/>
        </form>
    )
    
    return content
}

