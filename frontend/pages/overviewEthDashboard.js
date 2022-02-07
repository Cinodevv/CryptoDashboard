import 'bulma/css/bulma.css'
import styles from '../styles/echange.module.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { getERC20Contract } from '../blockchain/ethContract'

const OverviewEthDashboard = () => {

    const [error, setError] = useState('')
    const [web3, setWeb3] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [cutAddressNoMsg, setCutAddressNoMsg] = useState("")
    const [cutAddress, setCutAddress] = useState("Hello, User")
    const [connectMsg, setConnectMsg] = useState("Connect your wallet to check your balances!")
    const [connectStatus, setConnectStatus] = useState("Connect Wallet")
    const [dullLabel, setDullLabel] = useState("Not Connected")
    const [ethAmt, setEthAmt] = useState("...")
    const [chainlinkAmt, setChainlinkAmt] = useState("...")
    const [daiAmt, setDaiAmt] = useState("...")
    const [usdtAmt, setUsdtAmt] = useState("...")
    const [shibAmt, setShibAmt] = useState("...")
    const [mendohRinkeby] = useState("0xA6c3E9673B4698D7Ad0596585e4529e6713A8836")
    const [chainlinkAddress] = useState("0x01be23585060835e02b77ef475b0cc51aa1e0709")
    const [daiAddress] = useState("0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa")
    const [usdtAddress] = useState("0xD92E713d051C37EbB2561803a3b5FBAbc4962431")
    const [shibAddress] = useState("0xA9Dd75D6ADc6be40393ecDd71Dc134D1DBC624D1")

    const [vmChainlinkContract, setVmChainlinkContract] = useState(undefined)
    const [vmDaiContract, setVmDaiContract] = useState(undefined)
    const [vmUsdtContract, setVmUsdtContract] = useState(undefined)
    const [vmShibContract, setVmShibContract] = useState(undefined)

    useEffect(() =>{
        shortenAndSetAddress()    
        getEthAmtHandler()
        getDaiAmtHandler()
        getLinkAmtHandler()
        getUsdtAmtHandler()
        getShibAmtHandler()
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
                web3 = new Web3(window.ethereum)
                setWeb3(web3)
                const accounts = await web3.eth.getAccounts()
                setAddress(accounts[0])
                shortenAndSetAddress()    
                getEthAmtHandler()
                getDaiAmtHandler()
                getLinkAmtHandler()
                getUsdtAmtHandler()
                getShibAmtHandler()
                getContracts()
                setConnectMsg("")
                setConnectStatus("Wallet Connected")
                setDullLabel("Connected")
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            }
        }
        else {
            console.log ("Please install metamask")
        }

    }

    const getEthAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const ethAmt = await web3.eth.getBalance(address)
        const newEthAmt = web3.utils.fromWei(ethAmt, "ether" )
        const cutEthArray =  Array.from(newEthAmt);
                const newSpliceAddress = 
                cutEthArray[0]+
                cutEthArray[1]+
                cutEthArray[2]+
                cutEthArray[3]+
                cutEthArray[4]+
                cutEthArray[5]
        setEthAmt(newSpliceAddress)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }

    const getContracts = async () => {
        try {        
              const chainlinkContract = getERC20Contract(chainlinkAddress,web3)
              setVmChainlinkContract(chainlinkContract)
            }
           catch (err) {
            setError(err.message)
            console.log(err.message)          
        }
        try {        
            const daiContract = getERC20Contract(daiAddress,web3)
            setVmDaiContract(daiContract)
          }
         catch (err) {
          setError(err.message)
          console.log(err.message)          
      }
      try {        
        const usdtContract = getERC20Contract(usdtAddress,web3)
        setVmUsdtContract(usdtContract)
      }
     catch (err) {
      setError(err.message)
      console.log(err.message)   
    }       
      try {        
        const shibContract = getERC20Contract(shibAddress,web3)
        setVmShibContract(shibContract)
      }
     catch (err) {
      setError(err.message)
      console.log(err.message)          
     }
     }

     const getDaiAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const daiAmt = await vmDaiContract.methods.balanceOf(address).call()
        const daiDec = await vmDaiContract.methods.decimals().call()
        daiAmt = daiAmt/(10**daiDec)
        setDaiAmt(daiAmt)
        console.log("Dai Amt:"+daiAmt)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
}
    const getUsdtAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const usdtAmt = await vmUsdtContract.methods.balanceOf(address).call()
        const usdtDec = await vmUsdtContract.methods.decimals().call()
        usdtAmt = usdtAmt/(10**usdtDec)
        setUsdtAmt(usdtAmt)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
}
    const getShibAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const shibAmt = await vmShibContract.methods.balanceOf(address).call()
        const shibDec = await vmShibContract.methods.decimals().call()
        shibAmt = shibAmt/(10**shibDec)
        setShibAmt(shibAmt)
        }
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
    }
    const getLinkAmtHandler = async () => {
        try        
        {
        if (address!=undefined){
        const chainlinkAmt = await vmChainlinkContract.methods.balanceOf(address).call()
        const chainlinkDec = await vmChainlinkContract.methods.decimals().call()
        chainlinkAmt = chainlinkAmt/(10**chainlinkDec)
        setChainlinkAmt(chainlinkAmt)
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
    <div className={styles.mainEthNet}>
        <div className="columns">
            <div className={styles.midleft}>
                <aside>
                    <ul>
                        <li><a className={styles.texts}>Dashboard</a></li>
                        <li><a className={styles.texts}>NFT Marketplace</a></li>
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
          <a className="button is-warning" href="overviewBscDashboard">
            <strong>Switch To BSC</strong>
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
        <article className={styles.cardddeth}>
          <p className="title pl-2 pt-2">My Wallet</p>
          <p className="subtitle pl-3">ERC-20</p>
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
                                <img src="/eth.png" width="50" height="50" alt="eth logo"></img>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <p className="title">ETH</p>
                                <p className="subtitle">Ethereum</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-2">
                            <article className="tile is-child box">
                                <p className="title">{ethAmt}</p>
                                <p className="subtitle">Balance</p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <img src="/link.png" width="50" height="50" alt="eth logo"></img>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <p className="title">LINK</p>
                                <p className="subtitle">Chainlin</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-2">
                            <article className="tile is-child box">
                                <p className="title">{chainlinkAmt}</p>
                                <p className="subtitle">Balance</p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <img src="/dai.png" width="50" height="50" alt="eth logo"></img>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <p className="title">DAI</p>
                                <p className="subtitle">StableCoin</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-2">
                            <article className="tile is-child box">
                                <p className="title">{daiAmt}</p>
                                <p className="subtitle">Balance</p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <img src="/usdt.png" width="50" height="50" alt="eth logo"></img>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <p className="title">USDT</p>
                                <p className="subtitle">USD Tether</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-2">
                            <article className="tile is-child box">
                                <p className="title">{usdtAmt}</p>
                                <p className="subtitle">Balance</p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <img src="/shiba.png" width="50" height="50" alt="eth logo"></img>
                            </article>
                        </div>
                        <div className="tile is-parent  mt-2">
                            <article className="tile is-child box">
                                <p className="title">SHIB</p>
                                <p className="subtitle">Shiba Inu</p>
                            </article>
                        </div>
                        <div className="tile is-parent mt-2">
                            <article className="tile is-child box">
                                <p className="title">{shibAmt}</p>
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

export default OverviewEthDashboard