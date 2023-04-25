import buge from '../assets/buge700x350.jpg'
import macta from '../assets/macta700x350.jpg'
import stussis from '../assets/stussis700x350.jpg'
import seaweasel from '../assets/seaweasel700x350.jpg'
import torbomb from '../assets/torbombdesign700x350.jpg'
import whitsteen from '../assets/whitsteen-project.png'
import robopunks from '../assets/robopunks700x350.png'
import sffpc from '../assets/sffpc-700x350.png'

export const projects = [
    {
      title: "buge",
      description: "buge is a command-line application that uses the OpenAI API to generate solutions to error codes.",
      image: buge,
      alt: "buge command-line application",
      code: "https://github.com/damonpickett/buge",
      site: "https://pypi.org/project/buge/",
      stack: "Python, OpenAI, python-dotenv, rich",
      id: 0
    },
    {
      title: "MacTA",
      description: "MacTA is command-line application that utilizes the OpenAI API to generate instructions for performing tasks in the MacOS terminal.",
      image: macta,
      alt: "MacTA command-line application",
      code: "https://github.com/damonpickett/macta",
      site: "https://www.npmjs.com/package/macta",
      stack: "Javascript, OpenAI, readline, fs, path",
      id: 1
    },
    {
      title: "Stussis",
      description: "Stussis is an events centre in Qualicum Beach, BC. I was hired to build their website to drive more traffic to their AirBnB page.",
      image: stussis,
      alt: "Stussis Events Centre",
      code: false,
      site: "https://stussis.ca/",
      stack: "Wordpress, Elementor",
      id: 2
    },
    {
      title: "Sea Weasel",
      description: "Sea Weasel is a punk rock, nautical clothing line. This landing page collects users' emails who want to be notified of product releases.",
      image: seaweasel,
      alt: "Sea Weasel nautical clothing line",
      code: "https://github.com/sea-weasel/sea-weasel.github.io",
      site: "https://seaweasel.ca/",
      stack: "React.js, CSS, Mailchimp",
      id: 3
    },
    {
      title: "Torbomb Design",
      description: "Torbomb Designs is expanding possibilities in the world of paintball by creating accessories via 3D printing technology.",
      image: torbomb,
      alt: "Torbomb Designs",
      code: false,
      site: "https://torbombdesigns.bigcartel.com/",
      stack: "Bigcartel",
      id: 4
    },
    {
      title: "Whitsteen NFT",
      description: "The Whitsteen Project is a mock NFT project based on the artwork of Whitsteen. This app records transactions on the Ethereum testnet.",
      image: whitsteen,
      alt: "The Whitsteen Project",
      code: "https://github.com/damonpickett/whitsteen-project",
      site: "https://damonpickett.github.io/whitsteen-project/",
      stack: "React.js, CSS, Solidity, Hardhat, Ethers.js",
      id: 5
    },
    {
      title: "RoboPunks NFT",
      description: "My Full Mint Website allows users to connect their Ethereum wallets and mint a RoboPunks NFT token on the Goerli Testnet.",
      image: robopunks,
      alt: "RoboPunks NFT",
      code: "https://github.com/damonpickett/full-mint-website",
      site: "https://damonpickett.github.io/full-mint-website/",
      stack: "React.js, CSS, Solidity, Hardhat, Ethers.js",
      id: 6
    },
    {
      title: "Film Poster Club",
      description: "The Sci-Fi Film Poster Club allows users to connect their Ethereum wallets and mint ERC721 tokens on the Rinkeby Testnet.",
      image: sffpc,
      alt: "Sci-Fi Film Poster Club",
      code: "https://github.com/damonpickett/sffpc",
      site: "https://damonpickett.github.io/sffpc/#/",
      stack: "React.js, CSS, Solidity, Hardhat, Ethers.js",
      id: 7
    }
  ];
  
  console.log(projects); // You can view the array of objects in the console
  