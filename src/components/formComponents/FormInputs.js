import useFormContext from "../../hooks/useFormContext"
import WalletCreate from "./walletCreate"
import RecoveryEmail from "./recoveryEmailpage"
import SecurePage from "./securePage"
import PasswordSet from "./setPass"
import UserName from "./userName"
import RecoveryOtp from "./recoveryEmailOtp"
import SeedPhrasePage from "./seedPhrasepage"


const FormInputs = () => {
    const {page} = useFormContext()
    const display ={
      0:<WalletCreate/>,
      1:<PasswordSet/>,
      2:<SeedPhrasePage/>,
      3:<SecurePage/>,
      4:<RecoveryEmail/>,
      5:<UserName/>,
        //remember to include form pages or individual form components

    }
    const content =(
      <div>{display[page]}</div>
    )

    return content
}

export default FormInputs