import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {Button, Input, Modal} from 'antd'
import mnemonicWords from 'mnemonic-words'
import './styles.scss'

const ShowMnemonicWords = (props) =>{
    const [timer, setTimer] = useState(0)
    const history = useHistory()

    useEffect(()=>{
        setTimeout(()=>{
            setTimer(timer+1)
        , 1000})
        if (timer == 0){
            history.push("confirm-new-wallet")
        }
    })

    return(
        <div className="create-wallet-container">
            <h2>This is your Mnemonic words</h2>
            <div>Let note or remember it.</div>
            <Input value={inputValidate}/>
            <div>
                {
                    randomKey.map((item, index) => 
                        <Button className="validate-buttons" onClick={()=>{}} key={index}>{mnemonicWords[item]}</Button>)
                }
            </div>
            
            <div>Open modal to close in 5s</div>
        </div>
        
    )
}

export default ShowMnemonicWords