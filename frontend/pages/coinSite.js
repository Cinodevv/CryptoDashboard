import "bulma/css/bulma.css";
import styles from "../styles/coinSite.module.css";
import Image from "next/image";
import ReactNbsp from "react-nbsp";
import Link from "next/link";

const DuckSite = () => {
  const anon = () => {
    try {
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <body className={styles.theBodyPage}>
      <div>
        <h1 className={styles.titlePage}>THE MIGHTY DUCKS</h1>
        <img src="/theDucks.jpg" height="200" width="500"></img>
        <div>Buy Now to Join the Mighty Ducks Club</div>
        <div>Total Supply of 100m</div>
        <div>Running on Binance Smart Chain</div>
        <div>0% Sales Tax</div>
        <div>The Most Exclusive Club in Crypto</div>
        <Link href="https://poocoin.app/">
          <button className={styles.theButton}>
            Buy
            <Image
              className={styles.pancakeLogo}
              src="/poocoin.png"
              height="30"
              width="30"
            />
          </button>
        </Link>
        <ReactNbsp />
        <ReactNbsp />
        <Link href="https://pancakeswap.finance/">
          <button className={styles.theButton}>
            Buy{" "}
            <Image
              className={styles.pancakeLogo}
              src="/pancakeSwap.jpg"
              height="30"
              width="30"
            />
          </button>
        </Link>
        <ReactNbsp />
        <ReactNbsp />
        <Link href="https://bscscan.com/address/0x3b7d1865c72bb955d523bd39ba85cb290827c451">
          <button className={styles.theButton}>
            Contract&nbsp;
            <Image
              className={styles.pancakeLogo}
              src="/contract.png"
              height="30"
              width="30"
            />
          </button>
        </Link>
        <ReactNbsp />
        <ReactNbsp />
        <Link href="https://testnets.opensea.io/collection/cryptoducks-m2yxnlizh9">
          <button className={styles.theButton}>
            Opensea{" "}
            <Image
              className={styles.pancakeLogo}
              src="/osea.png"
              height="30"
              width="30"
            />
          </button>
        </Link>
        <ReactNbsp />
        <ReactNbsp />
        <Link href="https://bscscan.com/token/0x3b7d1865c72bb955d523bd39ba85cb290827c451">
          <button className={styles.theButton}>
            Token&nbsp;
            <Image
              className={styles.pancakeLogo}
              src="/logo.png"
              height="30"
              width="30"
            />
          </button>
        </Link>
        <div className={styles.bottomPage}>
          <img className={styles.socialsLogo} src="/telegram.png"></img>
          <ReactNbsp />
          <ReactNbsp />
          <img className={styles.socialsLogo} src="/discord.png"></img>
          <hr></hr>
          <Link href="/landing">
            <button className={styles.theButton}>Return</button>
          </Link>
          <p className={styles.theFooter}>
            Mando Copyright 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </body>
  );
};

export default DuckSite;
