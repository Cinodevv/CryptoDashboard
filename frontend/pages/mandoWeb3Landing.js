import "bulma/css/bulma.css";
import { useState } from "react";
import styles from "../styles/landingPage.module.css";
import ReactNbsp from "react-nbsp";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// import your icons
import {
  faEnvelope,
  faCodeBranch,
  faUserGraduate,
  faFile,
  faShop,
  faFileContract,
  faWallet,
  faScroll,
  faCircleInfo,
  faBitcoinSign,
} from "@fortawesome/free-solid-svg-icons";

const mandoWeb3Landing = () => {
  const [about, setAbout] = useState("");
  const [aboutSub, setAboutSub] = useState("");

  const [aboutStatus, setAboutStatus] = useState("ABOUT ME");

  if (typeof window !== "undefined") {
  }
  const displayAbout = () => {
    try {
      if (aboutStatus != "CLOSE") {
        setAbout(
          "Hi! I am a Software Developer from Montreal, Canada actively seeking a remote position in software development. My hours are flexible to work in any time zone, remote global."
        );
        setAboutSub(
          "Explore my work to see if my talents are a good fit for your company."
        );
        setAboutStatus("CLOSE");
      } else {
        setAbout("");
        setAboutSub("");
        setAboutStatus("ABOUT ME");
      }
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <html className={styles.thehtml}>
      <body className={styles.bodyPage}>
        <div>
          <div className={styles.titleOne}>MANDO&apos;S DASHBOARD</div>
          <div className={styles.titleTwo}>Explore My Software Projects</div>
          <div className={styles.buttonHolderDiv}>
            <p>
              <Link href="/overviewEthDashboard">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faWallet} />
                  &nbsp; CryptoERCDashboard
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="/nftDashboard">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faWallet} />
                  &nbsp; NFTDashboard
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://testnets.opensea.io/collection/cryptoducks-m2yxnlizh9">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faScroll} />
                  &nbsp; NFTScriptMint
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://rinkeby.etherscan.io/token/0x715A8b087f3491f37C481eD5b0D08288F1832EC5">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faFileContract} />
                  &nbsp; NFTContract
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="/coinSite">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faBitcoinSign} />
                  &nbsp; CryptoToken
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="/overviewBscDashboard">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faWallet} />
                  &nbsp; CryptoBEPDashboard
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://crypto-dash-api.vercel.app/">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faCircleInfo} />
                  &nbsp; CryptoAPI
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://bscscan.com/address/0x3b7d1865c72bb955d523bd39ba85cb290827c451">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faFileContract} />
                  &nbsp; CryptoBEPContract
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://rinkeby.etherscan.io/address/0x93a2f07f41a9a61c7602f3618db9d59f1eb01702">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faFileContract} />
                  &nbsp; CryptoERCContract
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="/landing">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faShop} />
                  &nbsp; NFTMarketplace
                </button>
              </Link>
            </p>
            <div className="infoButtons">
              <p className={styles.titleThree}>More Details</p>
              <Link href="/Armandoresume.pdf">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faFile} />
                  &nbsp; Armando CV
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;My Github
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://www.linkedin.com/in/armando-mancino-81382b170">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faUserGraduate} />
                  &nbsp;My LinkedIn
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="mailto: armando.mancino@outlook.com">
                <button className={styles.theButtons}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp; Email Me
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.aboutTextDiv}>
            <p className={styles.aboutText}>{about}</p>
            <p className={styles.aboutText}>{aboutSub}</p>
          </div>
          <div>
            <button onClick={displayAbout} className={styles.theButtonAbout}>
              {aboutStatus}
            </button>
          </div>
        </div>
      </body>
      <div className={styles.footer}>
        <p>Website designed and programmed by Armando Mancino.</p>
      </div>
    </html>
  );
};

export default mandoWeb3Landing;
