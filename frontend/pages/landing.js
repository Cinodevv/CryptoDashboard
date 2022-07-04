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
  faPaw,
  faMessage,
  faHandHoldingHeart,
  faFish,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
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
  function outClear() {
    document.getElementById("descText").innerHTML =
      "Hover over projects to read their descriptions.";
  }
  function over1() {
    document.getElementById("descText").innerHTML =
      "A crypto dashboard for the ERC network where you can connect your wallet and check your holdings.";
  }
  function over2() {
    document.getElementById("descText").innerHTML =
      "A dashboard where you can connect your wallet and view your holdings of my very own NFT collection that I minted with my own script.";
  }
  function over3() {
    document.getElementById("descText").innerHTML =
      "A Python script that minted my very own NFT collection on the blockchain. Links to opensea for result.";
  }
  function over4() {
    document.getElementById("descText").innerHTML =
      "Link to my NFT ERC-721 token contract.";
  }
  function over5() {
    document.getElementById("descText").innerHTML =
      "Website of my very own crypto token on the blockchain.";
  }
  function over6() {
    document.getElementById("descText").innerHTML =
      "A crypto dashboard for the BEP network where you can connect your wallet and check your holdings.";
  }
  function over7() {
    document.getElementById("descText").innerHTML =
      "An crypto news dashboard that uses API calls to display various news and information on a website regarding cryptocurrency.";
  }
  function over8() {
    document.getElementById("descText").innerHTML =
      "Link to my BEP20 token contract.";
  }
  function over9() {
    document.getElementById("descText").innerHTML =
      "Link to my ERC-20 token contract.";
  }
  function over10() {
    document.getElementById("descText").innerHTML =
      "A marketplace for NFTs. Started but not completed. Link Coming Soon.";
  }
  function over11() {
    document.getElementById("descText").innerHTML =
      "My website I created for a dog care service I provide in my neighbourhood.";
  }
  function over12() {
    document.getElementById("descText").innerHTML =
      "Link to my personal CV for my qualifications.";
  }
  function over13() {
    document.getElementById("descText").innerHTML =
      "Link to my Github for some other projects.";
  }
  function over14() {
    document.getElementById("descText").innerHTML =
      "Link to my LinkedIn account. I am not too active there.";
  }
  function over15() {
    document.getElementById("descText").innerHTML =
      "Link to email me directly. Best method to contact me.";
  }
  function over16() {
    document.getElementById("descText").innerHTML =
      "Newest project in my development so not even close to functional. A forum place for people to discuss stocks and crypto.";
  }
  function over17() {
    document.getElementById("descText").innerHTML =
      "Website I designed for a non-profit organization.";
  }
  function over18() {
    document.getElementById("descText").innerHTML =
      "Fully functional Poker game with C#. Github Source Code.";
  }
  function over19() {
    document.getElementById("descText").innerHTML =
      "Space shooter game with Javascript. Github Source Code.";
  }
  function over20() {
    document.getElementById("descText").innerHTML =
      "Shopping Cart System with Javascript and JQuery. Github Source Code.";
  }
  function over21() {
    document.getElementById("descText").innerHTML =
      "Weather API website that retrieves weather details with Javascript and JQuery. Github Source Code.";
  }
  function over22() {
    document.getElementById("descText").innerHTML =
      "Fully Functional Battleship Game with C# and UI.";
  }
  function over23() {
    document.getElementById("descText").innerHTML =
      "I tried to disprove a math theory to speed up my homework with Java. Github Source Code.";
  }
  function over24() {
    document.getElementById("descText").innerHTML =
      "Input and Output from File Readstream. Github Source Code.";
  }
  function over25() {
    document.getElementById("descText").innerHTML =
      "Link to my Venture Capital Fund with 35 Investors. (Website still under construction.)";
  }

  return (
    <html className={styles.thehtml}>
      <body className={styles.bodyPage}>
        <div>
          <div className={styles.titleOne}>MANDO&apos;S DASHBOARD</div>
          <div className={styles.titleTwo}>Explore My Software Projects</div>
          <br></br>
          <div>
            <p className={styles.titleDesc} id="descText">
              Hover over projects to read descriptions.
            </p>
          </div>
          <div className={styles.buttonHolderDiv}>
            <p>
              <Link href="/overviewEthDashboard">
                <button
                  onMouseOver={over1}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faWallet} />
                  &nbsp; Crypto ERC Dashboard
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="/nftDashboard">
                <button
                  onMouseOver={over2}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faWallet} />
                  &nbsp; NFT Dashboard
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://testnets.opensea.io/collection/cryptoducks-m2yxnlizh9">
                <button
                  onMouseOver={over3}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faScroll} />
                  &nbsp; NFT Script Mint
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://rinkeby.etherscan.io/token/0x715A8b087f3491f37C481eD5b0D08288F1832EC5">
                <button
                  onMouseOver={over4}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faFileContract} />
                  &nbsp; NFT Contract
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="/coinSite">
                <button
                  onMouseOver={over5}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faBitcoinSign} />
                  &nbsp; Crypto Token
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="/overviewBscDashboard">
                <button
                  onMouseOver={over6}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faWallet} />
                  &nbsp; Crypto BEP Dashboard
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://crypto-dash-api.vercel.app/">
                <button
                  onMouseOver={over7}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                  &nbsp; Crypto API
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://bscscan.com/address/0x3b7d1865c72bb955d523bd39ba85cb290827c451">
                <button
                  onMouseOver={over8}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faFileContract} />
                  &nbsp; Crypto BEP Contract
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://rinkeby.etherscan.io/address/0x93a2f07f41a9a61c7602f3618db9d59f1eb01702">
                <button
                  onMouseOver={over9}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faFileContract} />
                  &nbsp; Crypto ERC Contract
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="/landing">
                <button
                  onMouseOver={over10}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faShop} />
                  &nbsp; NFT Marketplace
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="http://doggyventures.ca">
                <button
                  onMouseOver={over11}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faPaw} />
                  &nbsp; My Dog Care Website
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="http://forumly.vercel.app/">
                <button
                  onMouseOver={over16}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faMessage} />
                  &nbsp; Forumly
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="http://nksdkidsfirst.com/">
                <button
                  onMouseOver={over17}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                  &nbsp; Client&apos;s Non-Profit Website
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/Poker">
                <button
                  onMouseOver={over18}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;Poker C#
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/Space-Attack">
                <button
                  onMouseOver={over19}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;Space Attack Game JS
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/Shopping-Cart">
                <button
                  onMouseOver={over20}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;Shopping Cart Website Javascript
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/Weather-API">
                <button
                  onMouseOver={over21}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;Weather API
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/UI-Battleship">
                <button
                  onMouseOver={over22}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;BattleShip Game
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/Theorem">
                <button
                  onMouseOver={over23}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;Theorem
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino/File-IO-Formatting">
                <button
                  onMouseOver={over24}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;File I/O
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="http://Smallfishfund.vc">
                <button
                  onMouseOver={over25}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faFish} />
                  &nbsp; Small Fish Fund
                </button>
              </Link>
            </p>
            <div className="infoButtons">
              <p className={styles.titleThree}>More Details</p>
              <Link href="/Armandoresume.pdf">
                <button
                  onMouseOver={over12}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faFile} />
                  &nbsp; Armando CV
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://github.com/mandocino">
                <button
                  onMouseOver={over13}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                  &nbsp;My Github
                </button>
              </Link>

              <ReactNbsp />
              <ReactNbsp />
              <Link href="https://www.linkedin.com/in/armando-mancino-81382b170">
                <button
                  onMouseOver={over14}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
                  <FontAwesomeIcon icon={faUserGraduate} />
                  &nbsp;My LinkedIn
                </button>
              </Link>
              <ReactNbsp />
              <ReactNbsp />
              <Link href="mailto: armando.mancino@outlook.com">
                <button
                  onMouseOver={over15}
                  onMouseOut={outClear}
                  className={styles.theButtons}
                >
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
        <p>Website programmed by Armando Mancino.</p>
      </div>
    </html>
  );
};

export default LandingPage;
