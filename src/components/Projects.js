// Import Assets
import { projects } from '../constants/projects'

const Projects = () => {
  return (
    <section className="projects" data-aos='fade-in'>
      <h2>My Projects</h2>

      <div className="projects__cards">
        {projects.map((p, i) =>{
          return(
            <div className='projects__card'>
              <div className="card-title">
                <h3>{p.title}</h3>
              </div>
              <div className="card-img">
                <img src={p.image} alt={p.alt} key={p.id}/>
              </div>
              <div className="card-text">
                <p>{p.description}</p>
              </div>
              <div className="card-buttons">
                <a href={p.site} target="_blank" rel='noreferrer' className="button">
                Site
                </a>
                {p.code === false ? null : (
                <a href={p.code} target="_blank" className="button" rel="noreferrer">
                  Code
                </a>
                )}

          </div>
            </div>
          )
        })}
      <div id='experience'></div>
      </div>
      
    </section>
  );
};

export default Projects;
