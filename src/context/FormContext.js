import { createContext,useState,useEffect } from "react";

const FormContext= createContext({})

export const FormProvider = ({children}) =>{
    const title ={
        0 :'Create a wallet',
        1 :'Set a password for your wallet',
        2 :'',
        3 :'Set recovery emails',
        4 :'Wallet Holder username Info',
    }
    const [page,setPage] = useState (0)
    const [data,setData]= useState({
        ownerEmail:"",
        passWord:"",
        recoveryEmail1:"",
        recoveryEmail2:"",
        walletOwnerUserName:"",
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
    const canNextPage1 =Object.keys(data)
        .filter(key => key.startsWith('owner'))
        .map(key =>data[key])
        .every(Boolean)
    const canNextPage2 =Object.keys(data)
        .filter(key => key.startsWith('pass'))
        .map(key =>data[key])
        .every(Boolean)
    const canNextPage3 =Object.keys(data)
        .filter(key => key.startsWith('recovery'))
        .map(key =>data[key])
        .every(Boolean)
    const canNextPage4 =Object.keys(data)
        .filter(key => key.startsWith('wallet'))
        .map(key =>data[key])
        .every(Boolean)
    return(
        <FormContext.Provider value={{title,page,setPage,data,setData, canSubmit,handleChange}}>
            {children}
        </FormContext.Provider>
    )
}
export default FormContext;