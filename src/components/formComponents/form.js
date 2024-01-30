import useFormContext from '../../hooks/useFormContext'
import FormInputs from './FormInputs'
import '../../styles/form.css'

export default function Form(){
    const{
        page,
        setPage,
        data,
        title,
        canSubmit,
        submitHide,
        disableNext,
        disablePrev,
        prevHide,
        nextHide,
    } = useFormContext()
   
    const handlePrev = () => setPage(prev => prev - 1)
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
                <div className='buttons-section'>
                    <button type="button" className={`${prevHide}`} onClick={handlePrev}>Previous</button>
                    <button type="submit" className={`button ${submitHide}`} onClick={!canSubmit} >Submit</button>
                    <button type="button" className={`button ${nextHide}`} onClick={handleNext} >Next</button>                    
                </div>
                
            </form>
        </div>
    )
    
    return content
}

