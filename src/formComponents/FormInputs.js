import useFormContext from "../hooks/useFormContext"
import WalletCreate from "./walletCreate"
import RecoveryEmail from "./recoveryEmailpage"
import SecurePage from "./securePage"
import PasswordSet from "./setPass"


const FormInputs = () => {
    const {page} = useFormContext()
    const display ={
      0:<WalletCreate/>,
      1:<PasswordSet/>,
      2:<SecurePage/>,
      3:<RecoveryEmail/>,
        //remember to include form pages or individual form components

    }
    const content =(
      <div>{display[page]}</div>
    )

    return content
}

export default FormInputs