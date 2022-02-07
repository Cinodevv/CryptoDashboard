import 'bulma/css/bulma.css'
import styles from '../styles/echange.module.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'

const dashboard = () => {

    const [error, setError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [web3, setWeb3] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [cutAddress, setCutAddress] = useState("Hello, User")
    const [connectMsg, setConnectMsg] = useState("Connect your wallet to check your balances!")
    const [connectStatus, setConnectStatus] = useState("Connect Wallet")
    const [tokenAmt, setTokenAmt] = useState("...")
    const [gasAmt, setGasAmt] = useState("...")
    const [totalSupply, setTotalSupply] = useState("...")
    const [sendToAddress, setSendToAddress] = useState(undefined)
    const [sendingAmt, setSendingAmt] = useState(undefined)
    const [transactionCount, setTransactionCount] = useState("0")

    useEffect(() =>{
        shortenAndSetAddress()    
        GetTokenAmtHandler()
        GetTransactionCountHandler()
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
    const ConnectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try 
            {
                await window.ethereum.request({method: "eth_requestAccounts"})
                web3 = new Web3(window.ethereum)
                setWeb3(web3)
                const accounts = await web3.eth.getAccounts()
                setAddress(accounts[0])
                ShortenAndSetAddress() 
                GetContract()   
                GetTokenAmtHandler()
                GetGasAmtHandler()
                GetTransactionCountHandler()
                GetTotalSupplyHandler()
                SetConnectStatus("Wallet Connected")
                SetConnectMsg("Wallet connected successfully.")
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            }
        }
        else {
            console.log ("Please install metamask")
        }

    }

    const GetTokenAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const tokenAmt = await web3.eth.getBalance(address)
        const newtokenAmt = web3.utils.fromWei(tokenAmt, "ether" )
        console.log(newtokenAmt)
        const cutEthArray =  Array.from(newtokenAmt);
                const newSpliceEth = 
                cutEthArray[0]+
                cutEthArray[1]+
                cutEthArray[2]+
                cutEthArray[3]+
                cutEthArray[4]+
                cutEthArray[5]
        setTokenAmt(newSpliceEth)
        console.log(newSpliceEth)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const Transact = () => {
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

    const GetTransactionCountHandler = async () => {
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

    const GetGasAmtHandler = async () => {
        try        
        {
        const gasAmt = await web3.eth.getGasPrice()
        const newGasAmt = web3.utils.fromWei(gasAmt, "ether" )
        setGasAmt(newGasAmt)
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const GetTotalSupplyHandler = async () => {
        try        
        {
        const totalSupply = 119427265
        setTotalSupply(totalSupply)
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

return(
<body>
    <div className={styles.top}>
        <h1>Mando Crypto Dashboard</h1>
         <button className={styles.connecter} onClick={ConnectWalletHandler} >{connectStatus}</button>
    </div>
    <div className={styles.mainEthNet}>
        <div className="columns">
            <div className={styles.midleft}>
                <aside>
                    <ul>
                        <li><a className={styles.texts}>Dashboard</a></li>
                        <li><a className={styles.texts}>NFT Marketplace</a></li>
                        <li><a className={styles.texts}>Mando Coin</a></li>
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
      <a className="navbar-item" href="overviewEthDashboard">
        Overview
      </a>

      <a className="navbar-item" href="ethDashboard">
        Eth
      </a>
      <a className="navbar-item" href="linkDashboard">
        Link
      </a>
      <a className="navbar-item" href="daiDashboard">
        Dai
      </a>
      <a className="navbar-item" href="usdtDashboard">
        Usdt
      </a>
      <a className="navbar-item" href="shibaDashboard">
      Shiba
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            USDC
          </a>
          <a className="navbar-item">
            OKB
          </a>
          <a className="navbar-item">
            BAT
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-warning">
            <strong>Switch To Bsc</strong>
          </a>
          <a className="button is-light" disabled title="Disabled button">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
                <section>
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent  mt-4">
                            <article className="tile is-child box">
                                <img src="/eth.png" width="50" height="50" alt="eth logo"></img>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-4">
                            <article className="tile is-child box">
                                <p className="title">ETH</p>
                                <p className="subtitle">Ethereum</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-4">
                            <article className="tile is-child box">
                                <p className="title">{tokenAmt}</p>
                                <p className="subtitle">Balance</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-4">
                            <article className="tile is-child box">
                                <p className="title">{gasAmt}</p>
                                <p className="subtitle">Gas Price</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-4">
                            <article className="tile is-child box">
                                <p className="title">{totalSupply}</p>
                                <p className="subtitle">Total Supply</p>
                            </article>
                        </div>
                    </div>
                </section>
                <div className="columns">
                            <div className="column is-full">
                                <div className="card events-card">
                                    <header className="card-header">
                                        <p className="card-header-title is-centered">Transactions</p>
                                    </header>
                                    <div className="card-table">
                                        <div className="content">
                                            <table className="table is-fullwidth is-striped is-centered">
                                                <tbody>
                                                <p className={styles.transactionAmt}> {transactionCount} transactions from this address.</p>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <a className="button is-link card-footer-item" href={`https://rinkeby.etherscan.io/address/${address}`}>View All</a>
                                    </footer>
                                </div>
                            </div>
                </div>
                <div className="columns">
                    <div className="column is-full">
                            <div className="card" >
                                <header className="card-header">
                                    <p className="card-header-title">Send An Eth Transaction</p>
                                </header>
                                <div className="card-table is-centered">
                                    <div className="content is-centered">
                                        <table className="table is-fullwidth is-striped is-centered">
                                            <tbody>
                                            <input onChange={event => setSendToAddress(event.target.value)} className="input" name="type" placeholder="Send to"/>
                                            <input onChange={event => setSendingAmt(event.target.value)} className="input" name="type" placeholder="Amount (eth)"/>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <button className="button is-link card-footer-item" onClick={Transact} >Send</button>
                                </footer>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
)
}

export default dashboard