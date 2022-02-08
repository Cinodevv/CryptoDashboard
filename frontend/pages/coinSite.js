import 'bulma/css/bulma.css'
import styles from '../styles/mendohCoinSite.module.css'
import Image from 'next/image'
import Web3 from 'web3'
import ReactNbsp from 'react-nbsp'



const DuckSite = () => {
    const goToPoocoin = () => {
        try
        {
            window.location.href="https://poocoin.app/";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }
    const goToContract = () => {
        try
        {
            window.location.href="https://bscscan.com/";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }
    const goToCake = () => {
        try
        {
            window.location.href="https://pancakeswap.finance/";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }
     const goToOpensea = () => {
        try
        {
            window.location.href="https://opensea.io";
        }
        catch (err) {
         setError(err.message)
         console.log(err.message)
     }
    }
   
        
return(
<body className={styles.bodyPage}>
    <div>
        <h1 className={styles.titlePage}>THE MIGHTY DUCKS</h1>
        <nav className={styles.theNav}>
            <a href="https://openseas.io"> NFT MarketPlace</a>
        </nav>
        <img src="/theDucks.jpg" height="400" width="800"></img>
        <div>Buy Now to Join the Mighty Ducks Club</div>
        <div>Total Supply of 100m</div>
        <div>Running on Binance Smart Chain</div>
        <div>0% Sales Tax</div>
        <div>The Most Exclusive Club in Crypto</div>
        <button onClick={goToPoocoin} className={styles.theButton}>Buy <Image className={styles.pancakeLogo} src="/poocoin.png" height="30" width="30"/></button><ReactNbsp/><ReactNbsp/>
        <button onClick={goToCake} className={styles.theButton}>Buy <Image className={styles.pancakeLogo} src="/pancakeSwap.jpg" height="30" width="30"/></button><ReactNbsp/><ReactNbsp/>
        <button onClick={goToContract} className={styles.theButton}>Contract <Image className={styles.pancakeLogo} src="/contract.png" height="30" width="30"/></button><ReactNbsp/><ReactNbsp/>
        <button onClick={goToOpensea} className={styles.theButton}>Opensea <Image className={styles.pancakeLogo} src="/osea.png" height="30" width="30"/></button>
        <hr></hr>
        <div className={styles.bottomPage}>
            <img className={styles.pancakeLogo} src="/telegram.png"></img><ReactNbsp/><ReactNbsp/>
            <img className={styles.pancakeLogo} src="/discord.png"></img>
            <p className={styles.theFooter}>Mando Copyright 2022. All Rights Reserved.</p>
        </div>
    </div>

</body>
)
}

export default DuckSite