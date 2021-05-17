import {Button} from 'antd'
import './styles.scss'

const AccessWallet = (props) =>{

    return(
        <div className="access-wallet-container">
            <h2>Access My Wallet</h2>
            <div>You don't have a wallet?<span><a href='./create-new-wallet'>Create a new wallet</a></span> </div>
            <Button>Access wallet</Button>
        </div>
        
    )
}

export default AccessWallet