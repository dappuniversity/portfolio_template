// Import Assets
import crypto from "../assets/crypto-voting.png";
import hlp from "../assets/hlp.png";
import blb from "../assets/booklistbuilder.png";

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
            <h3>HLP Blog</h3>
          </div>
          <div className="card-img">
            <img src={hlp} alt="Compound Landing Page" />
          </div>
          <div className="card-text">
            <p>
            The Higher Level Programming blog is a place for me to articulate programming concepts in terms easily understood. It uses React.js for the front-end and Python/Django for the backend.
            </p>
          </div>
          <div className="card-buttons">
            <a
              href="https://damonpickett.github.io/hlp-blog-frontend/#/"
              target="_blank"
              className="button"
            >
              Site
            </a>
            <a
              href="https://github.com/damonpickett/hlp-blog-frontend"
              target="_blank"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projects__card">
          <div className="card-title">
            <h3>BookListBuilder</h3>
          </div>
          <div className="card-img">
            <img src={blb} alt="Aave Landing Page" />
          </div>
          <div className="card-text">
            <p>
            BookListBuilder is a React app which accesses the Google Books API to enable the user to create their own reading list. It also features a random quote generator to inspire the user’s search.
            </p>
          </div>
          <div className="card-buttons">
            <a href="https://damonpickett.github.io/react-booklistbuilder/#/" target="_blank" className="button">
              Site
            </a>
            <a
              href="https://github.com/damonpickett/react-booklistbuilder"
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
