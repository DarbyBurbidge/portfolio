import { Link } from "react-router-dom";


class Project {
    name: string;
    domain: string;
    github: string;
    imageSRC: string;
    constructor(name: string, domain: string, github: string = "", imageSRC: string = "") {
        this.name = name;
        this.domain = domain;
        this.github = github;
        this.imageSRC = imageSRC;        
    }
};

export const Projects: React.FC = () => {
    const projects: [Project] = [new Project("SalegeHT", "salegeht.com")]
    
    return(
        <div className="body-container">
            <div className="projects">
                <h3 className="projects-header">Projects</h3>
                <div className="card-container">
                    {projects.map((project) => {
                        return (
                            <div className={`${project.name} card`}>
                                <img src={project.imageSRC} alt={`${project.name} example window`} />
                                <h4 className="card-name">{project.name}</h4>
                                {project.github !== '' ? <p>{project.github}</p> : <p>github unavailable</p>}
                                {project.domain !== '' ? <Link to={project.domain}>{project.domain}</Link> : <p>example unavailable</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};