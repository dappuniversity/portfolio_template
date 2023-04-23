// Import Assets
import crypto from "../assets/crypto-voting.png";
import robopunks from "../assets/robopunks700x350.png";
import sffpc from '../assets/sffpc-700x350.png';
import whitsteenProject from '../assets/whitsteen-project.png'
import { projects } from '../constants/projects'

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        {projects.map((p, i) =>{
          return(
            <div className='projects__card'>
              <div className="card-title">
                <h3>{p.title}</h3>
              </div>
              <div className="card-img">
                <img src={p.image} alt="Uniswap Swap Page" key={p.id}/>
              </div>
              <div className="card-text">
                <p>{p.description}</p>
              </div>
              <div className="card-buttons">
                <a href={p.site} target="_blank" rel='noreferrer' className="button">
                Site
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  className="button"
                  rel='noreferrer'
                >
                  Code
                </a>
          </div>
            </div>
          )
        })}
      
      </div>
    </section>
  );
};

export default Projects;
