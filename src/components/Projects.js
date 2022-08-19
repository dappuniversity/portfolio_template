// Import Assets
import crypto from "../assets/crypto-voting.png";
import robopunks from "../assets/robopunks700x350.png";
import sffpc from '../assets/sffpc-700x350.png';
import whitsteenProject from '../assets/whitsteen-project.png'

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <div className="card-title">
            <h3>Crypto Voting Dapp</h3>
          </div>
          <div className="card-img">
            <img src={crypto} alt="Uniswap Swap Page" />
          </div>
          <div className="card-text">
            <p>
              The Crypto Voting Dapp allows users to connect their Ethereum wallet and
              vote as to whether they think a given currency will rise or fall
              in value. All votes are verifiable on the Mumbai testnet.
            </p>
          </div>
          <div className="card-buttons">
            <a href="https://damonpickett.github.io/crypto-voting-dapp/" target="_blank" className="button">
              Site
            </a>
            <a
              href="https://github.com/damonpickett/crypto-voting-dapp"
              target="_blank"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projects__card">
          <div className="card-title">
            <h3>Full Mint Website</h3>
          </div>
          <div className="card-img">
            <img src={robopunks} alt="Compound Landing Page" />
          </div>
          <div className="card-text">
            <p>
            My Full Mint Website allows users to connect their Ethereum wallets and mint a RoboPunks NFT token on the Goerli Testnet. The app uses React.js, Solidity, Ethers.js, Hardhat, and Chakra UI.
            </p>
          </div>
          <div className="card-buttons">
            <a
              href="https://damonpickett.github.io/full-mint-website/"
              target="_blank"
              className="button"
            >
              Site
            </a>
            <a
              href="https://github.com/damonpickett/full-mint-website"
              target="_blank"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projects__card">
          <div className="card-title">
            <h3><span className='small2'>The Sci-Fi Film Poster Club</span></h3>
          </div>
          <div className="card-img">
            <img src={sffpc} alt="sffpc" />
          </div>
          <div className="card-text">
            <p>
            The Sci-Fi Film Poster club is a mock NFT project which demonstrates my ability to build a front-end interface that sells ERC721 tokens via smart contract on the Ethereum's Rinkeby testnet.
            </p>
          </div>
          <div className="card-buttons">
            <a href="https://damonpickett.github.io/sffpc/#/" target="_blank" className="button">
              Site
            </a>
            <a
              href="https://github.com/damonpickett/sffpc"
              target="_blank"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projects__card">
          <div className="card-title">
            <h3><span className='small1'>The Whitsteen Project</span></h3>
          </div>
          <div className="card-img">
            <img src={whitsteenProject} alt="The Whitsteen Project" />
          </div>
          <div className="card-text">
            <p>
            The Whitsteen Project is a mock NFT project which demonstrates my ability to conceptualize and execute an NFT art project. It utilizes OpenZeppelin's ERC1155 token standard.
            </p>
          </div>
          <div className="card-buttons">
            <a href="https://damonpickett.github.io/whitsteen-project/" target="_blank" className="button">
              Site
            </a>
            <a
              href="https://github.com/damonpickett/whitsteen-project"
              target="_blank"
              className="button"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
