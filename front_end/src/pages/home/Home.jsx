const { default: CreateNewWallet } = require("../createNewWallet/CreateNewWallet")


const Home = () =>{

    return(
        <>
            <h2>Home</h2>
            <CreateNewWallet/>
        </>
        
    )
}

export default Home