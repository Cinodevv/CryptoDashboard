import 'bulma/css/bulma.css'
import { useState } from 'react'
import styles from '../styles/landingPage.module.css'
import ReactNbsp from 'react-nbsp'
import Image from 'next/image'


const LandingPage = () => {

    const [about, setAbout] = useState('')
    const [aboutSub, setAboutSub] = useState('')

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

    const goToNftOpensea = () => {
        try
        {
            window.location.href="https://opensea.io/";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }
    const goToNftDashboard = () => {
        try
        {
            window.location.href="/nftDashboard";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }


    const goToToken = () => {
        try
        {
            window.location.href="https://bscscan.com/token/0x32b28ea2210a410d2aadb743238e43ca7c3f64e5";
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
            setAbout("Hi! I am a Software Developer from Canada actively seeking a position in blockchain development. My hours are flexible to work in any time zone, remote global.")
            setAboutSub("Explore my work to see if my talents are a good fit for your company.")
            setAboutStatus("CLOSE")
            }
            else {
                setAbout("")
                setAboutSub("")
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
        <div className={styles.titleOne}>MANDO&apos;S WEB3 DASHBOARD</div>
        <div className={styles.titleTwo}>Click to Explore My Projects</div>
        <p><button onClick={goToCryptoDashboard} className={styles.theButtons} >CryptoDashboard</button><ReactNbsp/><ReactNbsp/>
           <button onClick={goToNftDashboard} className={styles.theButtons} >NftDashboard</button><ReactNbsp/><ReactNbsp/>
           <button onClick={goToNftOpensea} className={styles.theButtons} >NFTCollection</button><ReactNbsp/><ReactNbsp/>
           <button onClick={goToToken} className={styles.theButtons} >CryptoToken</button><ReactNbsp/><ReactNbsp/>
           <button onClick={goToToken} className={styles.theButtons} >Web3HUB</button><ReactNbsp/><ReactNbsp/>
        </p>
        <div className={styles.theSpacer}>
        <button onClick={displayAbout}className={styles.theButtonAbout} >{aboutStatus}</button>
        <p className={styles.aboutText}>{about}</p>
        <p className={styles.aboutText}>{aboutSub}</p>
    </div>
    </div>
</body>
)
}

export default LandingPage