import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/ProjectListItem/ProjectListItem.css';

// Import Actions
import { fetchProject } from '../../ProjectActions';

// Import Selectors
import { getProjects } from '../../ProjectReducer';

export function ProjectDetailPage(props) {
  return (
    <div>
      <Helmet title={props.project.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.project.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.project.link}</p>
        <p className={styles['post-desc']}>{props.project.description}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
ProjectDetailPage.need = [params => {
  return fetchProject(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    project: getProjects(state, props.params.cuid),
  };
}

ProjectDetailPage.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ProjectDetailPage);
