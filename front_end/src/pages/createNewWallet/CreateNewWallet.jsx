import {Button} from 'antd'
import './styles.scss'

const CreateNewWallet = (props) =>{

    return(
        <div className="create-wallet-container">
            <h2>Get a New Wallet</h2>
            <div>Already have a wallet?<span><a href="./access-my-wallet">Access My Wallet</a></span> </div>
            <Button>Create New Wallet</Button>
        </div>
        
    )
}

export default CreateNewWallet