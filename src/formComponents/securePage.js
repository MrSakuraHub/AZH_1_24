import '../styles/secure.css'
import wallet from '../resources/Wallet EUR.png'

const SecurePage = () => {
  const content =(
    <>
      <div className="header-place">
        <img src={wallet}/>
        <h3>Your Wallet is ready!</h3>
        <h4>Do not loose it</h4>
        <p>The last step is to recover your wallet without password</p>
      </div>
            
    </>
  )
  return content
}

export default SecurePage