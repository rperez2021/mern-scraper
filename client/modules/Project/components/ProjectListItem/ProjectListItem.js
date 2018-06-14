import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './ProjectListItem.css';

function ProjectListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/projects/${props.project.slug}-${props.project.cuid}`} >
          {props.project.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.project.title}</p>
      <p className={styles['post-desc']}>{props.project.description}</p>
      <a href={props.project.link}>{props.project.link}</a>
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteProject" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

ProjectListItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProjectListItem;
