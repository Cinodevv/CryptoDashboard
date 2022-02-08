import 'bulma/css/bulma.css'
import styles from '../styles/echange.module.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { getNftContract } from '../blockchain/nftContract'

const NftDashboard = () => {
    const [error, setError] = useState('')
    const [web3, setWeb3] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [cutAddress, setCutAddress] = useState("Hello, User")
    const [connectMsg, setConnectMsg] = useState("Connect your wallet to check your Mando Collection NFTS!")
    const [connectStatus, setConnectStatus] = useState("Connect Wallet")
    const [nftStatus, setNftStatus] = useState("SHOW NFTS")
    const [tokenAmt, setTokenAmt] = useState("...")
    const [vmContract, setVmContract] = useState(undefined)
    const [tokenSymbol, setTokenSymbol] = useState("...")
    

    useEffect(() => {
        shortenAndSetAddress()
        getTokenAmtHandler()
        getSymbol()
    })

    const shortenAndSetAddress = () => {
        try {
            if (address != undefined) {
                const cutAddressArray = Array.from(address);
                const newSpliceAddress =
                    cutAddressArray[0] +
                    cutAddressArray[1] +
                    cutAddressArray[2] +
                    cutAddressArray[3] +
                    cutAddressArray[4] +
                    cutAddressArray[5] +
                    "..." +
                    cutAddressArray[38] +
                    cutAddressArray[39] +
                    cutAddressArray[40] +
                    cutAddressArray[41];
                setCutAddress("Welcome, " + newSpliceAddress);
            }
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }
    const connectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" })
                web3 = new Web3(window.ethereum)
                setWeb3(web3)
                const accounts = await web3.eth.getAccounts()
                setAddress(accounts[0])
                shortenAndSetAddress()
                getContract()
                getTokenAmtHandler()
                getSymbol()
                setConnectMsg("")
                setConnectStatus("Wallet Connected")
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            }
        }
        else {
            console.log("Please install metamask")
        }

    }

    const getContract = async () => {
        try {
            const contract = getNftContract("0x715A8b087f3491f37C481eD5b0D08288F1832EC5", web3)
            setVmContract(contract)
        }
        catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }
    const getTokenAmtHandler = async () => {
        try {
            if (address != undefined) {
                const tokenAmt = await vmContract.methods.balanceOf(address).call()
                setTokenAmt(tokenAmt)
            }
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }
    const getSymbol = async () => {
        try {
            if (address != undefined) {
                const tokenSymbol = await vmContract.methods.symbol().call()
                setTokenSymbol(tokenSymbol)
            }
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }
    const getPhotosHandler = async () => {
        try {
            if (address != undefined) {
                if (nftStatus != "HIDE NFTS") {
                    const container = document.querySelector('#listNfts');
                    container.innerHTML = ""
                    setNftStatus("HIDE NFTS")
                    for (let i = 0; i < tokenAmt; i++) {
                        const tokenId = await vmContract.methods.tokenOfOwnerByIndex(address, i).call()
                        let tokenMetadataURI = await vmContract.methods.tokenURI(tokenId).call()
                        tokenMetadataURI = tokenMetadataURI.substring(0, 67)
                        const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())
                        const nftElement = document.querySelector('#nftTemplate').cloneNode(true)
                        nftElement.querySelector('p').innerText = tokenMetadata['name']
                        nftElement.querySelector('a').href = 'https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${tokenId}'
                        nftElement.querySelector('img').src = tokenMetadata['image']
                        nftElement.querySelector('img').alt = tokenMetadata['description']
                        const container = document.querySelector('#listNfts');
                        container.appendChild(nftElement);
                    }
                }
                else {
                    setNftStatus("SHOW NFTS")
                    const container = document.querySelector('#listNfts');
                    container.innerHTML = ""
                }
            }
            else {
                alert("Please connect your wallet.")
            }
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }


    return (
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
                                <li><a className={styles.texts}>NFT Dashboard</a></li>
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
                        <section>
                            <div className="tile is-ancestor has-text-centered">
                                <div className="tile is-parent  mt-4">
                                    <article className="tile is-child box">
                                    <p className="title">{tokenSymbol}</p> 
                                    <p className="subtitle">NFT</p>                
                                    </article>
                                </div>
                                <div className="tile is-parent  mt-4">
                                    <article className="tile is-child box">
                                        <p className="title">{tokenAmt}</p>
                                        <p className="subtitle">BALANCE</p>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <hr></hr>
                        <div className={styles.nftDisplayCenter}>
                            <button className={styles.nftDisplay} onClick={getPhotosHandler} >{nftStatus}</button>
                        </div>
                        <div className="title is-centered" id="listNfts">
                        </div>
                        <div id="nftTemplate">
                            <section>
                                <p></p>
                                <a href="">
                                    <img src="" alt=""></img>
                                </a>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </body>
    )
}

export default NftDashboard

