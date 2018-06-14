import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import ProjectList from '../../components/ProjectList';
// import ProjectCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { fetchProjects, deleteProjectRequest, fetchScrape } from '../../ProjectActions';
import { toggleViewProjects } from '../../../App/AppActions';

// Import Selectors
import { getShowProjects } from '../../../App/AppReducer';
import { getProjects } from '../../ProjectReducer';

class ProjectListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  handleViewProjects = () => { 
    this.props.dispatch(toggleViewProjects());

  }

  handleDeleteProject = project => {
    if (confirm('Do you want to delete this project')) { // eslint-disable-line
      this.props.dispatch(deleteProjectRequest(project));
    }
  };

  render() {
    return (
      <div>
        <ProjectList handleDeleteProject={this.handleDeleteProject} projects={this.props.projects} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ProjectListPage.need = [() => { return fetchProjects(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showProjects: getShowProjects(state),
    projects: getProjects(state),
  };
}

ProjectListPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  showProjects: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ProjectListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ProjectListPage);
