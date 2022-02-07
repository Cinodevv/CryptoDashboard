import 'bulma/css/bulma.css'
import styles from '../styles/echange.module.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'

const MandoWeb3Landing = () => {
    const [error, setError] = useState('')
    const [web3, setWeb3] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [cutAddress, setCutAddress] = useState("Hello, User")
    const [connectMsg, setConnectMsg] = useState("Connect your wallet to check your balances!")
    const [connectStatus, setConnectStatus] = useState("Connect Wallet")
    const [tokenAmt, setTokenAmt] = useState("...")
    const [gasAmt, setGasAmt] = useState("...")
    const [sendToAddress, setSendToAddress] = useState(undefined)
    const [sendingAmt, setSendingAmt] = useState(undefined)
    const [transactionCount, setTransactionCount] = useState("0")
    const [totalSupply] = useState("119,477,198 ETHER")

    useEffect(() => {
        shortenAndSetAddress()
        getTokenAmtHandler()
        getTransactionCountHandler()
    })

    // connects to metamask
    const ConnectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" })
                web3 = new Web3(window.ethereum)
                setWeb3(web3)
                const accounts = await web3.eth.getAccounts()
                setAddress(accounts[0])
                shortenAndSetAddress()
                getTokenAmtHandler()
                getTransactionCountHandler()
                getGasAmtHandler()
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

    //shortens retrieved address
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

    // returns specific tokens owned
    const getTokenAmtHandler = async () => {
        try {
            if (address != undefined) {
                const tokenAmt = await web3.eth.getBalance(address)
                const newtokenAmt = web3.utils.fromWei(tokenAmt, "ether")
                const cutEthArray = Array.from(newtokenAmt);
                const newSpliceEth =
                    cutEthArray[0] +
                    cutEthArray[1] +
                    cutEthArray[2] +
                    cutEthArray[3] +
                    cutEthArray[4] +
                    cutEthArray[5]
                setTokenAmt(newSpliceEth)
            }
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }

    // sends transaction to send out
    const Transact = () => {
        try {
            web3.eth.sendTransaction(
                {
                    from: address,
                    to: sendToAddress,
                    value: web3.utils.toWei(sendingAmt, "ether"),
                }, function (err, transactionHash) {
                    if (!err)
                        console.log(transactionHash + " success");
                });
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }

    // returns total transactions from address
    const getTransactionCountHandler = async () => {
        try {
            if (address != undefined) {
                const transactionCount = await web3.eth.getTransactionCount(address)
                setTransactionCount(transactionCount)
            }
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }
    // returns gas prices
    const getGasAmtHandler = async () => {
        try {
            const gasAmt = await web3.eth.getGasPrice()
            gasAmt = web3.utils.fromWei(gasAmt, "ether")
            setGasAmt(gasAmt + " ETHER")
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }

    return (
        <body>
            <div className={styles.top}>
                <h1>Mando Crypto Dashboard</h1>
                <button className={styles.connecter} onClick={ConnectWalletHandler} >{connectStatus}</button>
            </div>
        </body>
    )
}

export default MandoWeb3Landing