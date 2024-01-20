import useFormContext from '../hooks/useFormContext'
import FormInputs from './FormInputs'
import '../styles/create.css'

export default function Form(){
    const{
        page,
        setPage,
        data,
        title,
        canSubmit,
        submitHide,
        disableNext,
    } = useFormContext()
    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }
    const content =(
        <form onSubmit={handleSubmit} className='wallet-form'>
            <header>
             <h2>{title[page]}</h2>           
            </header>
            <FormInputs/>
            <button type="button" disabled={disableNext} className='button' onClick={handleNext}>Next</button>
            <button type="submit" disabled={!canSubmit} className='button'>Submit Details</button>

        </form>
    )
    
    return content
}

