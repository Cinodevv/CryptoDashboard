import 'bulma/css/bulma.css'
import { useState } from 'react'
import styles from '../styles/landingPage.module.css'
import ReactNbsp from 'react-nbsp'

const LandingPage = () => {

    const [about, setAbout] = useState('')
    const [aboutStatus, setAboutStatus] = useState('ABOUT ME')

    const goToCryptoDashboard = () => {
        try
        {
            window.location.href="/overviewEthDashboard";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }

    const goToNft = () => {
        try
        {
            window.location.href="https://opensea.io/";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }

    const goToToken = () => {
        try
        {
            window.location.href="https://rinkeby.etherscan.io/token/0xa6c3e9673b4698d7ad0596585e4529e6713a8836";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }
    const displayAbout = () => {
        try
        {
            if(aboutStatus!="CLOSE"){
            setAbout("Hi! I am a Software Developer from Canada actively seeking a position in blockchain development. My hours are flexible to work in any time zone, remote global. Explore my work to see if my talents are a good fit for your company.")
            setAboutStatus("CLOSE")
            }
            else {
                setAbout("")
                setAboutStatus("ABOUT ME")
            }
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }

return(
<body className={styles.bodyPage}>
    <div>
        <div className={styles.titleOne}>MANDO'S WEB3 DASHBOARD</div>
        <div className={styles.titleTwo}>Click to Explore My Projects</div>
        <p><button onClick={goToCryptoDashboard} className={styles.theButtons} >CryptoDashboard</button><ReactNbsp/><ReactNbsp/>
           <button onClick={goToNft} className={styles.theButtons} >NFT Marketplace</button><ReactNbsp/><ReactNbsp/>
           <button onClick={goToToken} className={styles.theButtons} >Crypto Token</button><ReactNbsp/><ReactNbsp/>
        </p>
        <div className={styles.theSpacer}>
        <button onClick={displayAbout}className={styles.theButtonAbout} >{aboutStatus}</button>
        <p className={styles.aboutText}>{about}</p>
    </div>
    </div>
</body>
)
}

export default LandingPage