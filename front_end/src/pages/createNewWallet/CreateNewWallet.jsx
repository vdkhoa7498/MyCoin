import React, {useState, useEffect} from 'react'
import {Button, Input, Modal} from 'antd'
import mnemonicWords from 'mnemonic-words'
import './styles.scss'

function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: 'This is a notification message',
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

const CreateNewWallet = (props) =>{
    const [wallet, setWallet] = useState([])
    const [randomKey, setRandomKey] = useState([])
    const [showKey, setShowKey] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const [inputValidate, setInputValidate] = useState('')

    const createWallet = () =>{
        let wallet_ = []
        for (let i = 0; i< 12; i++){
            const temp = Math.floor(Math.random() * 2048);
            if ((wallet_.findIndex((item) => item == temp) > 0)){
                i--;
            } else {
                wallet_.push(temp)
            }
        }
        // wallet_.fill(randomValue())
        setWallet(wallet_)
        
        setRandomKey(wallet)
        randomKey.sort(function() {
            return 0.5 - Math.random();});
    }

    const showMnemonicWords = () =>{
        setShowKey(true)
    }

    return(
        <div className="create-wallet-container">
            <h2>Get a New Wallet</h2>
            <Modal
                visible={showKey}
            >
                {
                    wallet.map((item, index) => 
                        <div className="input" key={index}>{mnemonicWords[item]}</div>)
                }
            </Modal>
            <Input value={inputValidate}/>
            <div>
                {
                    randomKey.map((item, index) => 
                        <Button className="validate-buttons" onClick={()=>{}} key={index}>{mnemonicWords[item]}</Button>)
                }
            </div>
            <div>Already have a wallet?<span><a href="./access-my-wallet">Access My Wallet</a></span> </div>
            <Button onClick={createWallet}>Create New Wallet</Button>
            <Button onClick={countDown}>Open modal to close in 5s</Button>
        </div>
        
    )
}

export default CreateNewWallet