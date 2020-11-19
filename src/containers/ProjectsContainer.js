import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';

function ProjectsContainer(props) {
    const RenderProjects = () => {
       return props.projects.map(project => <ProjectCard key={project.id} renderVid={props.renderVid} project={project}/>)
    }

    return (
        <div id="projects" className="project-cards">
            <Row>
                {RenderProjects()}
            </Row>
        </div>
    )
}

export default ProjectsContainer;