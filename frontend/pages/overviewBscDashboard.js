import 'bulma/css/bulma.css'
import styles from '../styles/echange.module.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { getBEP20Contract } from '../blockchain/bscContract'
import Image from 'next/image'


const OverviewBscDashboard = () => {

    const [error, setError] = useState('')
    const [web3, setWeb3] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [cutAddressNoMsg, setCutAddressNoMsg] = useState("")
    const [cutAddress, setCutAddress] = useState("Hello, User")
    const [connectMsg, setConnectMsg] = useState("Connect your wallet to check your balances!")
    const [connectStatus, setConnectStatus] = useState("Connect Wallet")
    const [bnbAmt, setBnbAmt] = useState("...")
    const [copAddress] = useState("0x8789337a176e6e7223ff115f1cd85c993d42c25c")
    const [vmCopContract, setVmCopContract] = useState(undefined)
    const [dullLabel, setDullLabel] = useState("Not Connected")

    useEffect(() =>{
        shortenAndSetAddress()    
        getBnbAmtHandler()
    })

   const shortenAndSetAddress = () => {
       try
       {
        if (address!=undefined){
        const cutAddressArray =  Array.from(address);
        const newSpliceAddress = 
        cutAddressArray[0]+
        cutAddressArray[1]+
        cutAddressArray[2]+
        cutAddressArray[3]+
        cutAddressArray[4]+
        cutAddressArray[5]+
        "..."+
        cutAddressArray[38]+
        cutAddressArray[39]+
        cutAddressArray[40]+
        cutAddressArray[41];
        setCutAddressNoMsg(newSpliceAddress)
        setCutAddress("Welcome, " + newSpliceAddress);
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
                const web3 = new Web3(window.ethereum)
                setWeb3(web3)   
                const accounts = await web3.eth.getAccounts()
                setAddress(accounts[0])
                shortenAndSetAddress()    
                getContracts()
                setConnectMsg("")
                setConnectStatus("Wallet Connected")
                setDullLabel("Connected")
                getBnbAmtHandler()
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            }
        }
        else {
            console.log ("Please install binance wallet")
        }

    }

    const getContracts = async () => {
        try {        
            const copContract = getBEP20Contract(copAddress,web3)
            setVmCopContract(copContract)
          }
         catch (err) {
          setError(err.message)
          console.log(err.message)  
      }
     }

     const getBnbAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const bnbAmt = await web3.eth.getBalance(address)
        bnbAmt = web3.utils.fromWei(bnbAmt, "ether" )
        setBnbAmt(bnbAmt)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
}
        
return(
<body>
    <div className={styles.top}>
        <h1>Mando Crypto Dashboard</h1>
         <button className={styles.connecter} onClick={connectWalletHandler} >{connectStatus}</button>
    </div>
    <div className={styles.mainBsc}>
        <div className="columns">
            <div className={styles.midleft}>
                <aside>
                    <ul>
                    <li className={styles.leftText}><a href="nftDashboard" className={styles.texts}>NFT Dashboard</a></li>
                                <li className={styles.leftText}><a href="overviewEthDashboard" className={styles.texts}>Crypto ERC Dashboard</a></li>
                                <li className={styles.leftText}><a href="overviewBscDashboard" className={styles.texts}>Crypto BSC Dashboard</a></li>
                                <li className={styles.leftText}><a href="nftDashboard" className={styles.texts}>NFT Dashboard</a></li>
                                <li className={styles.leftText}><a href="coinSite" className={styles.texts}>Crypto Token</a></li>
                                <li className={styles.leftText}><a href="mandoWeb3Landing" className={styles.texts}>Landing Page</a></li>
                    </ul>
                </aside>
            </div>
            <div className="column is-9">
                <section className={styles.theWelcome}>
                        <div>
                            <h1 className="title">{cutAddress}</h1>
                            <h2 className="subtitle">{connectMsg}</h2>
                        </div>
                </section>
                <nav className="navbar mt-3" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="overviewBscDashboard">
        Overview
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            ...
          </a>
          <a className="navbar-item">
            ...
          </a>
          <a className="navbar-item">
            ...
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-warning" href="overviewEthDashboard">
            <strong>Switch To EthNet</strong>
          </a>
          <a className="button is-light" disabled title="Disabled button">
            {dullLabel}
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
        <section className="is-centered pt-5">
        <div className="tile is-child is-centered">
        <article className={styles.cardddbsc}>
          <p className="title pl-2 pt-2">My Wallet</p>
          <p className="subtitle pl-3">BEP-20</p>
          <div className={styles.spacer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="title pl-3">{cutAddressNoMsg}</p>
        </article>
        </div>
        </section>
        <section>

                <div className="columns is-9 mt-3 is-centered is-transparent">
                                <header className="card-header  is-transparent">
                                    <p className="card-header-title is-transparent">Wallet Balances</p>
                                </header>
                </div>
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <Image src="/bnb.png" width="50" height="50" alt="bnb logo"/>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <p className="title">BNB</p>
                                <p className="subtitle">Binance</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-2">
                            <article className="tile is-child box">
                                <p className="title">{bnbAmt}</p>
                                <p className="subtitle">Balance</p>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</body>
)
}

export default OverviewBscDashboard