import React, { PropTypes } from 'react';

// Import Components
import ProjectListItem from './ProjectListItem/ProjectListItem';

function ProjectList(props) {
  return (
    <div className="listView">
      {
        props.projects.map(project => (
          <ProjectListItem
            project={project}
            key={project.cuid}
            onDelete={() => props.handleDeleteProject(project.cuid)}
          />
        ))
      }
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
};

export default ProjectList;
