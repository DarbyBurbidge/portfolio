import "../Styles/Projects.css"

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
    const projects: any = [
        {
            name: "SalegeHT",
            domain: "salegeht.com",
            github: "",
            imageSRC: ""
        }, {
            name: "Portfolio",
            domain: "thedarby.rocks",
            github: "",
            imageSRC: ""
        }
    ]
    
    return(
        <div className="body-container">
            <div className="projects">
                <h2 className="projects-header neon-blue always-on">Projects</h2>
                <h4 className="sub-header neon-blue always-on"> </h4>
                <div className="card-container">
                    {projects.map((project: any) => {
                        return (
                            <div key={project.name}className={`${project.name} card`}>
                                <img className="card-image" src={project.imageSRC} alt={`${project.name} example window`} />
                                <h4 className="card-title neon-blue always-on">{project.name}</h4>
                                {project.github !== '' ? <div className="link-wrapper blue-wrapper"><p className="neon-blue body-link enabled">{project.github}</p></div> : <p className="body-link disabled">github unavailable</p>}
                                {project.domain !== '' ? <div className="link-wrapper blue-wrapper"><a className="neon-blue body-link enabled" href={`https://www.${project.domain}`}>{project.domain}</a></div> : <p className="body-link disabled">example unavailable</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};