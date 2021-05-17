import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import './styles.scss'

const Home = () =>{

    const history = useHistory()

    return(
        <div className="home-container">
            <Button type="primary" className="button-card" 
                onClick={()=>{ history.push("/create-new-wallet")}}
            >
                Create A New Wallet
            </Button>
            <Button type="ghost" className="button-card" 
                onClick={()=>{ history.push("/access-my-wallet")}}
            >
                Access My Wallet
            </Button>
        </div>
        
    )
}

export default Home