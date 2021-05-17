import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {Button, Input, message, Modal} from 'antd'
import mnemonicWords from 'mnemonic-words'
import './styles.scss'

const ConfirmNewWallet = (props) =>{
    const history = useHistory()
    const [keyWallet, setKeyWallet] = useState([])
    const [randomKey, setRandomKey] = useState([])
    const [inputKey, setInputKey] = useState([])

    const confirmWallet = () =>{
        if (inputKey === keyWallet){
            history.push("/")
        } else {
            message.warning('Please input again!')
        }

    }



    return(
        <div className="create-wallet-container">
            <h2>Get a New Wallet</h2>
            
            <Input value={inputValidate}/>
            <div>
                {
                    randomKey.map((item, index) => 
                        <Button className="validate-buttons" onClick={()=>{}} key={index}>{mnemonicWords[item]}</Button>)
                }
            </div>
            <div>Already have a wallet?<span><a href="./access-my-wallet">Access My Wallet</a></span> </div>
            <Button onClick={confirmWallet}>Create New Wallet</Button>
        </div>
        
    )
}

export default ConfirmNewWallet