import useFormContext from '../hooks/useFormContext'
import FormInputs from './FormInputs'
import '../styles/form.css'

export default function Form(){
    const{
        page,
        setPage,
        data,
        title,
        canSubmit,
        submitHide,
        disableNext,
        nextHide,
    } = useFormContext()
   

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }
    const content =(
        <div className='area'>
            <form onSubmit={handleSubmit} className='wallet-form'>
                <header>
                <h2>{title[page]}</h2>           
                </header>
                <FormInputs/>
                <button type="button" className={`button ${nextHide}`} onClick={handleNext} >Next</button>
                <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
            </form>
        </div>
    )
    
    return content
}

