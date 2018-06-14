import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_PROJECTS = 'ADD_PROJECTS';
export const DELETE_PROJECT = 'DELETE_PROJECT';

// Export Actions
export function scrapeProjects(projects) {
    return {
        type: SCRAPE_PROJECTS,
        projects,
    }
}

export function fetchScrape() {
    return (dispatch) => {
        return callApi('scrape').then(res.redirect("/")) //May not need .then - rob
    }
}

export function addProjects(projects) {
  return {
    type: ADD_PROJECTS,
    projects,
  };
}

export function fetchProject(cuid) {
  return (dispatch) => {
    return callApi(`projects/${cuid}`).then(res => dispatch(addProject(res.projects)));
  };
}

export function fetchProjects() {
  return (dispatch) => {
    return callApi('projects').then(res => {
      dispatch(addProjects(res.projects));
    });
  };
}

export function deleteProject(cuid) {
  return {
    type: DELETE_PROJECT,
    cuid,
  };
}

export function deleteProjectRequest(cuid) {
  return (dispatch) => {
    return callApi(`project/${cuid}`, 'delete').then(() => dispatch(deleteProject(cuid)));
  };
}
