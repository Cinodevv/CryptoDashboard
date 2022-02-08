import 'bulma/css/bulma.css'
import styles from '../styles/mendohCoinSite.module.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import mendohContract from '../blockchain/mendohContract'

const MendohCoinDashboard = () => {

    const [error, setError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [web3, setWeb3] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [cutAddress, setCutAddress] = useState("Hello, User")
    const [connectMsg, setConnectMsg] = useState("Connect your wallet to check your balances!")
    const [connectStatus, setConnectStatus] = useState("Connect Wallet")
    const [MendohAmt, setMendohAmt] = useState("...")
    const [gasAmt, setGasAmt] = useState("...")
    const [totalSupply, setTotalSupply] = useState("...")
    const [sendToAddress, setSendToAddress] = useState(undefined)
    const [vmMendohContract, setMendohContract] = useState(undefined)
    const [sendingAmt, setSendingAmt] = useState(undefined)
    const [transactionCount, setTransactionCount] = useState("0")

    useEffect(() =>{
        shortenAndSetAddress()    
        getMendohAmtHandler()
        getTransactionCountHandler()
    })
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
   const shortenAndSetAddress = () => {
       try
       {
        if (address!=undefined){
        const cutAddressArray =  Array.from(address);
        const newSpliceAddress = 
        cutAddressArray[0]+
        cutAddressArray[1]+
        cutAddressArray[2]+
        "..."+
        cutAddressArray[38]+
        cutAddressArray[39]+
        cutAddressArray[40]+
        cutAddressArray[41];
        setCutAddress("Welcome, " +newSpliceAddress);
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
   }
    const connectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try 
            {
                await window.ethereum.request({method: "eth_requestAccounts"})
                web3 = new Web3(window.ethereum)
                setWeb3(web3)
                const accounts = await web3.eth.getAccounts()
                setAddress(accounts[0])
                shortenAndSetAddress() 
                getContract()   
                getMendohAmtHandler()
                getGasAmtHandler()
                getTransactionCountHandler()
                getTotalSupplyHandler()
                setConnectStatus("Wallet Connected")
                setConnectMsg("Wallet connected successfully.")
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            }
        }
        else {
            console.log ("Please install metamask")
        }

    }

    const transact = () => {
        try        
        {
            web3.eth.sendTransaction(
                {from:address,
                to:sendToAddress,
                value:  web3.utils.toWei(sendingAmt, "ether"),
                    }, function(err, transactionHash) {
              if (!err)
                console.log(transactionHash + " success"); 
            });
        } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const getTransactionCountHandler = async () => {
        try        
        {
        if (address!=undefined){
        const transactionCount = await web3.eth.getTransactionCount(address)
        setTransactionCount(transactionCount)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const getGasAmtHandler = async () => {
        try        
        {
        setGasAmt('NA')
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const getTotalSupplyHandler = async () => {
        try        
        {
        const totalSupply = await vmMendohContract.methods.totalSupply().call()
        setTotalSupply(totalSupply)
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const getContract = async () => {
        try {        
              const contract = mendohContract(web3)
              setMendohContract(contract)
            }
           catch (err) {
            setError(err.message)
            console.log(err.message)          
        }
        }
     const getMendohAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const mendohAmt = await vmMendohContract.methods.balanceOf(address).call()
        const mendohDec = await vmMendohContract.methods.decimals().call()
        mendohAmt = mendohAmt/(10**mendohDec)
        setMendohAmt(mendohAmt)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }
        
return(
<body className={styles.bodyPage}>
    <div>
        <h1 className={styles.titlePage}>THE MIGHTY DUCKS</h1>
        <nav className={styles.theNav}>
            <a href="mendoCoinSite"> Home</a> |
            <a href="/html/"> NFT MarketPlace</a> |
            <a href="/js/"> EtherScan</a> |
            <a href="/python/"> About</a>
        </nav>
        <img src="/theDucks.jpg" height="400" width="800"></img>
        <div>Buy Now to Join the Mighty Ducks Club</div>
        <div>Total Supply of 100m</div>
        <div>Running on Binance Smart Chain</div>
        <div>0% Sales Tax</div>
        <div>The Most Exclusive Club in Crypto</div>
        <button onClick={goToPoocoin} className={styles.theButton}>Buy<img className={styles.pancakeLogo} src="poocoin.png" height="200" width="30"></img></button>
        <button onClick={goToCake} className={styles.theButton}>Buy<img className={styles.pancakeLogo} src="pancakeSwap.jpg" height="200" width="30"></img></button>
        <button onClick={goToContract} className={styles.theButton}>Contract <img className={styles.pancakeLogo} src="contract.png" height="100" width="30"></img></button>
        <hr></hr>
        <img className={styles.pancakeLogo} src="/telegram.png"></img>
        <img className={styles.pancakeLogo} src="/discord.png"></img>
        <p className={styles.theFooter}>Mendoh Copyright 2022. All Rights Reserved.</p>
    </div>

</body>
)
}

export default MandingPage