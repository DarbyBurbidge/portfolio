import { useState } from "react";
import "../Styles/Projects.css"

interface Project {
    name: string;
    description: string,
    github: string;
    imageSRC?: string;
    example?: string; // Only meaningful when example is different from domain
    npm?: string;
};

export const Projects: React.FC = () => {
    const [ seeMore, setSeeMore ] = useState(false)

    const projects: Project[] = [
        {
            name: "Easy Pantry",
            example: "easypantry.app",
            github: "Pantry-frontend",
            imageSRC: "easypantry-thumbnail.png",
            description: "A simple app to help keep track of your pantry."
        }, {
            name: "react-meter",
            example: "/meter",
            npm: "react-meter",
            github: "react-meter",
            imageSRC: "react-meter_thumbnail.png",
            description: "A React component module for a semi-circular meter, built to be customizeable."
        }, {
            name: "LMDB-Express-Explorer-API",
            github: "LMDB-Express",
            description: "A minimal API to test the node-lmdb module and it's applications in a blockchain explorer"
        }, {
            name: "IPFS-Algorand Smart Contract",
            github: "ipfs_algorand_sc",
            description: "A smart contract written to explore the Algorand blockchain and distributed filesystems"
        }
    ]
    
    return(
        <div className="body-container">
            <div className="projects">
                <h2 className="projects-header neon-blue always-on">Projects</h2>
                <h4 className="sub-header neon-blue always-on"> </h4>
                <div className="card-container">
                    {projects.map((project: Project, idx: number) => {
                        if (idx < 2 || seeMore) {
                        return (
                            <div key={project.name} className={`${project.name} card`}>
                                {project.imageSRC ? (
                                    <img className="card-image"
                                        src={project.imageSRC}
                                        alt={`${project.name} example window`}
                                    />
                                ) : (
                                    <></>
                                )}
                                {project.example ? (
                                    <div className="link-wrapper blue-wrapper">
                                        <a className="card-title neon-blue always-on body-link enabled" href={`${project.example}`}>{project.name}</a>
                                    </div>
                                ) : (
                                    <h4 className="card-title neon-blue always-on">{project.name}</h4>
                                )}
                                {project.npm ? (
                                    <div className="link-wrapper blue-wrapper">
                                        <a className="neon-blue body-link enabled"
                                            href={`https://www.npmjs.com/package/${project.npm}`}>{`NPM`}</a>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {project.github !== '' ? (
                                    <div className="link-wrapper blue-wrapper">
                                        <a className="neon-blue body-link enabled"
                                            href={`https://www.github.com/DarbyBurbidge/${project.github}`}>
                                                {`Github`}
                                        </a>
                                    </div>
                                ) : (
                                    <p className="body-link disabled">github unavailable</p>
                                )}
                                <p className="blue-wrapper">{project.description}</p>
                            </div>
                        )
                        }
                    })
                }
                </div>
            </div>
        </div>
    );
};