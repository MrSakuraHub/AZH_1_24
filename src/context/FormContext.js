import { createContext,useState,useEffect } from "react";

const FormContext= createContext({})

export const FormProvider = ({children}) =>{
    const title ={
        0 :'Create wallet Info',
        1 :'Password creation Info',
        2 :'Secure wallet Info',
        3 :'Recovery Emails Info',
        4 :'Wallet Holder username Info',
    }
    const [page,setPage] = useState (0)
    const [data,setData]= useState({
        walletOwnerEmail:"",
        password:"",
        recoveryEmail1:"",
        recoveryEmail2:"",
        walletOwnerName:"",
    });
    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const { recoveryEmail2, ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page ===Object.keys(title).length - 1
    return(
        <FormContext.Provider value={{title,page,setPage,data,setData, canSubmit}}>
            {children}
        </FormContext.Provider>
    )
}
export default FormContext;